import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type CounterButton = {
  title: string;
  initialValue: number;
  step: number;
};

export default function CounterButton({
  title,
  initialValue,
  step,
}: CounterButton) {
  const [count, setCount] = useState(initialValue);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title={title} onPress={() => setCount(count + step)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    flex: 1,
    marginRight: 8,
  },
});
