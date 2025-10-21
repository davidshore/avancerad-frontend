import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, addNote } from "../api/notes";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

function NotesList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading notes</Text>;

  return (
    <ScrollView>
      {data.map((note: any) => (
        <Text key={note.id}>{note.title}</Text>
      ))}
    </ScrollView>
  );
}

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setTitle("");
      setContent("");
    },
  });

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} placeholder="New note" />
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="New content"
      />
      <Button title="Add" onPress={() => mutation.mutate({ title, content })} />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AddNote />
      <NotesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
