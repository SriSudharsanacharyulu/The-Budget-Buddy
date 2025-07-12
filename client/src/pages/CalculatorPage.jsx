import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import axios from "axios";

function CalculatorPage() {
  const [persons, setPersons] = useState(1);
  const [bus, setBus] = useState(0);
  const [food, setFood] = useState(0);
  const [days, setDays] = useState(0);
  const [stay, setStay] = useState(0);
  const [nights, setNights] = useState(0);
  const [intercity, setIntercity] = useState(0);
  const [other, setOther] = useState(0);
  const [history, setHistory] = useState([]);

  const total =
    persons *
    (Number(bus) +
      Number(food) * Number(days) +
      Number(stay) * Number(nights) +
      Number(intercity) +
      Number(other));

  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/trips");
      setHistory(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveTrip = async () => {
    try {
      await axios.post("http://localhost:5000/api/trips", {
        persons,
        bus,
        food,
        days,
        stay,
        nights,
        intercity,
        other,
        total,
      });
      alert("✅ Trip saved!");
      fetchHistory();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save trip.");
    }
  };

  const handleDeleteTrip = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/trips/${id}`);
      alert("🗑️ Trip deleted!");
      fetchHistory();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete trip.");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start p-4"
      style={{
        backgroundImage: "url('/travel-bg.jpg')",
      }}
    >
      <div className="bg-white/90 shadow-lg rounded-xl p-6 space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          ✈️ Trip Cost Calculator
        </h1>

        <input type="number" placeholder="Number of persons" value={persons} onChange={(e) => setPersons(e.target.value)} className="w-full p-2 border rounded" min="1" />
        <input type="number" placeholder="Bus fare per person" onChange={(e) => setBus(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Food per person per day" onChange={(e) => setFood(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Number of days" onChange={(e) => setDays(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Stay per person per night" onChange={(e) => setStay(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Number of nights" onChange={(e) => setNights(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Intercity travel per person" onChange={(e) => setIntercity(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Other costs per person" onChange={(e) => setOther(e.target.value)} className="w-full p-2 border rounded" />

        <div className="text-xl font-semibold text-center">
          Total: ₹{" "}
          <span className="text-green-600">{isNaN(total) ? 0 : total}</span>
        </div>

        <Button
          variant="default"
          size="lg"
          className="w-full"
          onClick={handleSaveTrip}
        >
          Save Trip
        </Button>
      </div>

      <div className="bg-white/90 shadow-lg rounded-xl p-6 mt-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          📜 Trip History
        </h2>

        {history.length === 0 ? (
          <p className="text-center text-gray-500">
            No trips yet. Start planning!
          </p>
        ) : (
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {history.map((trip) => (
              <div
                key={trip._id}
                className="border rounded-lg shadow-sm p-4 bg-gradient-to-r from-green-50 to-blue-50 relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-lg font-semibold text-gray-700">
                      👥 {trip.persons} {trip.persons > 1 ? "people" : "person"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(trip.createdAt).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteTrip(trip._id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                    title="Delete Trip"
                  >
                    🗑️
                  </button>
                </div>

                <p className="text-xl text-green-700">
                  Total: ₹ <span className="font-bold">{trip.total}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculatorPage;
