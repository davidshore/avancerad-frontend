export async function getNotes() {
  const res = await fetch("http://localhost:3000/api/notes-routes");
  return res.json();
}

export async function addNote(note: { title: string; content: string }) {
  const res = await fetch("http://localhost:3000/api/notes-routes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
}
