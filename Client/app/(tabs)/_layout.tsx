import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { 
  HomeIcon, 
  DocumentTextIcon, 
  BriefcaseIcon, 
  UserIcon, 
  UsersIcon,
  IdentificationIcon 
} from "react-native-heroicons/outline";

function TabIcon({ Icon, color, name, focused }: { 
  Icon: React.ComponentType<{ color: string; size?: number }>, 
  color: string, 
  name: string, 
  focused: boolean 
}) {
  return (
    <View className="flex items-center justify-center w-16 pt-3">
      <Icon color={color} size={26} />
      <Text style={{ color, fontSize: 10, marginTop: 2 }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Text>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "gray",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon Icon={HomeIcon} color={color} name="home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="applications"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon Icon={DocumentTextIcon} color={color} name="applications" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="internship"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon Icon={BriefcaseIcon} color={color} name="internship" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="applicants"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon Icon={UsersIcon} color={color} name="applicants" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon Icon={IdentificationIcon} color={color} name="users" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon Icon={UserIcon} color={color} name="profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
