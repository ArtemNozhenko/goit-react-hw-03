export default function Contact({
  data: { name, number },
}) {
  return (
    <div>
      <span>name: {name}</span>
      <span>number: {number}</span>
      <button>delete</button>
    </div>
  );
}
