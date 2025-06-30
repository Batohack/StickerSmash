import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#E76F51',
        tabBarInactiveTintColor: '#F4A261',
        tabBarStyle: {
          backgroundColor: '#264653',
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          borderTopWidth: 0,
          height: 68,
          shadowColor: '#623412',
          shadowOpacity: 0.14,
          shadowRadius: 14,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 16,
          letterSpacing: 0.7,
          marginBottom: 7,
          color: route.name === 'lessons' ? '#E76F51' : '#F4A261',
        },
        headerStyle: {
          backgroundColor: '#264653',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerShadowVisible: false,
        headerTintColor: '#F4A261',
        headerTitle: 'LanguePlus',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          letterSpacing: 1.5,
          fontSize: 26,
          color: '#F4A261',
          fontFamily: 'sans-serif',
          textShadowColor: '#623412',
          textShadowOffset: { width: 1, height: 2 },
          textShadowRadius: 4,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="auth"
        options={{
          title: 'Auth',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'log-in' : 'log-in-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={26} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="gamification"
        options={{
          title: 'Jeux',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'trophy' : 'trophy-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Groupes',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          title: 'Dictionnaire',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="lessons"
        options={{
          title: 'Leçons',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'school' : 'school-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="culture"
        options={{
          title: 'Culture',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'musical-notes' : 'musical-notes-outline'} color={color} size={26} />
          ),
        }}
      />
      {/* Onglet À propos retiré du menu principal, accessible via Paramètres */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Paramètres',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={26} />
          ),
        }}
      />
    </Tabs>
  );
}
