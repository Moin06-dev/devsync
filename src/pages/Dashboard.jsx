export default function Dashboard() {
  const cards = [
    { title: "Projects", value: "12", color: "bg-blue-500" },
    { title: "Team Members", value: "8", color: "bg-green-500" },
    { title: "Tasks Pending", value: "25", color: "bg-yellow-500" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to DevSync!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`p-6 rounded shadow text-white ${card.color}`}
          >
            <h2 className="text-xl">{card.title}</h2>
            <p className="text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
