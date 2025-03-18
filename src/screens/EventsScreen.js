import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
import StarEventSvg from '../assets/svg/StarEventSvg';
import SmallChevronSvg from '../assets/svg/SmallChevronSvg';

const daysInMonth = [
  [null, null, null, null, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, null]
];

const EventScreen = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [activeTab, setActiveTab] = useState('Calendar');
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Space calendar</Text>

      <View style={styles.tabs}>
        {['Calendar', 'Advice', 'Nature'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}>
            <Text
              style={activeTab === tab ? styles.activeTabText : styles.tabText}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {activeTab === 'Calendar' && (
        <>
          <View style={styles.eventCard}>
            <StarEventSvg />
            <View>
              <Text style={styles.eventTitle}>Upcoming event:</Text>
              <Text style={styles.eventDescription}>
                Total Lunar Eclipse on March 14
              </Text>
            </View>
          </View>

          <Text style={styles.monthTitle}>March 2025</Text>
          <View style={styles.calendar}>
            <View style={styles.weekRow}>
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                <Text key={day} style={styles.dayHeader}>
                  {day}
                </Text>
              ))}
            </View>
            {daysInMonth.map((week, index) => (
              <View key={index} style={styles.weekRow}>
                {week.map((day, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.dayCell,
                      day === selectedDay && styles.selectedDay,
                    ]}
                    onPress={() => setSelectedDay(day)}
                    disabled={!day}>
                    <Text
                      style={[
                        styles.dayText,
                        day === selectedDay && styles.selectedDayText,
                      ]}>
                      {day || ''}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>

          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                marginTop: 10,
                fontWeight: 'bold',
              }}>
              March {selectedDay}
            </Text>
            {![2, 5, 12].includes(selectedDay) &&
            <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    marginTop: 10,
                  }}>
                  There are no events on this date
                </Text>
                <Image
                  source={require('../assets/img/_0017.png')}
                  style={{
                    width: 220,
                    height: 130,
                    borderRadius: 16,
                    marginRight: 8,
                  }}
                  resizeMode='contain'
                />
              </View>
            }

            {[2, 5, 12].includes(selectedDay) && (
              <View
                style={{
                  backgroundColor: '#053362',
                  padding: 16,
                  borderRadius: 16,
                  flexDirection: 'row',
                  marginTop: 8,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{flexDirection: 'column', justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#fff',
                      marginBottom: 6,
                    }}>
                    Quadrantids
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#fff',
                      marginBottom: 6,
                      width: 150,
                    }}>
                    This meteor shower peaked on January 2-3, 2025, with up to
                    120 meteors per hour
                  </Text>
                </View>
                <Image
                  source={require('../assets/img/Frame1462983962.png')}
                  style={{
                    width: 140,
                    height: 100,
                    borderRadius: 16,
                    marginRight: 8,
                  }}
                  resizeMode="cover"
                />
              </View>
            )}
          </View>
        </>
      )}

      {activeTab === 'Advice' && (
        <View style={styles.adviceContainer}>
          {['Meteor Showers', 'Eclipses', 'Planetary Oppositions'].map(
            section => (
              <View key={section}>
                <TouchableOpacity
                  style={styles.adviceItem}
                  onPress={() => toggleSection(section)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.adviceText}>{section}</Text>
                    {expandedSection === section ? (
                      <View
                        style={{
                          transform: [
                            {
                              rotate:
                                expandedSection === section ? '90deg' : '0deg',
                            },
                          ],
                        }}>
                        <SmallChevronSvg />
                      </View>
                    ) : (
                      <SmallChevronSvg />
                    )}
                  </View>

                  {expandedSection === section && (
                    <View style={styles.expandedContent}>
                      <Text style={styles.expandedText}>
                        {section === 'Meteor Showers' &&
                          'Quadrantids: This meteor shower peaked on January 2-3, 2025, with up to 120 meteors per hour.\n' +
                            '\n' +
                            'Perseids: One of the most famous meteor showers, this one is expected to peak on August 12-13, 2025, with up to 100 meteors per hour.\n' +
                            '\n' +
                            'Geminids: This meteor shower will peak on December 13-14, 2025, with up to 160 meteors per hour.'}
                        {section === 'Eclipses' &&
                          'Total Lunar Eclipse on March 14: This eclipse will be visible in the Americas.\n' +
                            '\n' +
                            'Partial Solar Eclipse on March 29: Two weeks after the total lunar eclipse, there will be a partial solar eclipse visible in some areas.\n' +
                            '\n' +
                            'Total Lunar Eclipse on September 7: This eclipse will be visible in Australia, Asia, Africa and Europe and will last for 1 hour and 22 minutes.\n' +
                            '\n' +
                            'Partial Solar Eclipse on September 21: After the total lunar eclipse, there will be a partial solar eclipse visible in some areas.'}
                        {section === 'Planetary Oppositions' &&
                          'Saturn Opposition on September 21: On this day, Saturn will be at its best visibility of the year, opposite the Sun in the sky. The planet will be visible all night at magnitude 0.6.\n' +
                            '\n' +
                            'Venus and Jupiter Approach on August 12: Venus and Jupiter will be just 0°52′ apart, creating a spectacular spectacle in the eastern sky before dawn.'}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            ),
          )}
        </View>
      )}

      {activeTab === 'Nature' && (
        <View style={styles.adviceContainer}>
          {['Future Space Missions', 'Past Space Missions'].map(section => (
            <View key={section}>
              <TouchableOpacity
                style={styles.adviceItem}
                onPress={() => toggleSection(section)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.adviceText}>{section}</Text>
                  {expandedSection === section ? (
                    <View
                      style={{
                        transform: [
                          {
                            rotate:
                              expandedSection === section ? '90deg' : '0deg',
                          },
                        ],
                      }}>
                      <SmallChevronSvg />
                    </View>
                  ) : (
                    <SmallChevronSvg />
                  )}
                </View>

                {expandedSection === section && (
                  <View style={styles.expandedContent}>
                    <Text style={styles.expandedText}>
                      {section === 'Future Space Missions' &&
                        'Artemis III (2026): NASA plans to land astronauts on the lunar surface, marking the first human return to the Moon since 1972.\n' +
                          '\n' +
                          'Tianwen-2 (2025): Chinese mission to retrieve samples from the near-Earth asteroid Kamoaleva and return them to Earth.\n' +
                          '\n' +
                          'Hera (2025): ESA mission to study the binary asteroid Didymos and its moon Dimorphos to assess planetary defense options.\n' +
                          '\n' +
                          'SPHEREx (2025): NASA space telescope designed to study the cosmic infrared background and search for water and organic molecules in star-forming regions.\n' +
                          '\n' +
                          "Lucy (2021–2033): NASA mission to study Jupiter's Trojan asteroids, providing information about the early solar system."}
                      {section === 'Past Space Missions' &&
                        'Apollo Program (1961–1972): A series of NASA missions that culminated in the landing of humans on the Moon in 1969.\n' +
                          '\n' +
                          'Voyager 1 and 2 (1977): Robotic probes launched to explore the outer planets of the Solar System and continue to transmit data from interstellar space.\n' +
                          '\n' +
                          'Cassini–Huygens (1997–2017): A joint NASA/ESA mission to explore Saturn and its moon Titan.\n' +
                          '\n' +
                          'Curiosity (2012–present): A NASA rover exploring the surface of Mars and searching for signs of habitability.\n' +
                          '\n' +
                          'Rosetta (2004–2016): ESA mission that was the first to land on a comet, providing valuable data on its composition.'}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
      <View style={{marginBottom: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#032950',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#F9CF22',
    borderRadius: 20,
  },
  tabText: {
    color: 'white',
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  eventCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  eventTitle: {
    fontWeight: 'bold',
    color: '#032950',
  },
  eventDescription: {
    color: '#032950',
  },
  monthTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  calendar: {
    backgroundColor: '#042b63',
    padding: 10,
    borderRadius: 10,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dayHeader: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  dayCell: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    color: 'white',
  },
  selectedDay: {
    backgroundColor: '#F9CF22',
    borderRadius: 20,
  },
  selectedDayText: {
    color: 'black',
    fontWeight: 'bold',
  },
  adviceContainer: {
    // backgroundColor: '#042b63',
    // padding: 15,
    // borderRadius: 10,
  },
  adviceItem: {
    backgroundColor: '#083b7b',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  adviceText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  expandedContent: {
    backgroundColor: '#083b7b',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  expandedText: {
    color: 'white',
    fontSize: 14,
  },
});

export default EventScreen;
