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

  const fetchTrips = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL || 'https://the-budget-buddy.onrender.com'}/api/trips`);
    setHistory(res.data);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const saveTrip = async () => {
    const trip = { persons, bus, food, days, stay, nights, intercity, other, total };
    await axios.post(`${process.env.REACT_APP_BACKEND_URL || 'https://the-budget-buddy.onrender.com'}/api/trips`, trip);
    fetchTrips();
  };

  const deleteTrip = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL || 'https://the-budget-buddy.onrender.com'}/api/trips/${id}`);
    fetchTrips();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{
        backgroundImage: "url('/travel-bg.jpg')",
      }}
    >
      <div className="bg-white/90 shadow-lg rounded-xl p-4 sm:p-6 space-y-4 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          ✈️ Trip Cost Calculator
        </h1>

        <div className="space-y-3">
          <input
            type="number"
            placeholder="Number of persons"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            className="w-full p-2 border rounded"
            min="1"
          />
          <input
            type="number"
            placeholder="Bus fare per person"
            onChange={(e) => setBus(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Food per person per day"
            onChange={(e) => setFood(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Number of days"
            onChange={(e) => setDays(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Stay per person per night"
            onChange={(e) => setStay(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Number of nights"
            onChange={(e) => setNights(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Intercity travel per person"
            onChange={(e) => setIntercity(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Other costs per person"
            onChange={(e) => setOther(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="text-xl font-semibold text-center">
          Total: ₹ <span className="text-green-600">{isNaN(total) ? 0 : total}</span>
        </div>

        <Button
          variant="default"
          size="lg"
          className="w-full"
          onClick={saveTrip}
        >
          Save Trip
        </Button>
      </div>

      {/* History Section */}
      <div className="bg-white/80 mt-4 shadow-md rounded-xl p-4 w-full max-w-md">
        <h2 className="text-lg font-bold mb-2 text-center">📜 Trip History</h2>
        {history.length === 0 ? (
          <p className="text-center text-gray-600">No trips saved yet.</p>
        ) : (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {history.map((trip) => (
              <div
                key={trip._id}
                className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm"
              >
                <div className="text-sm text-gray-700">
                  {trip.persons} persons — ₹{trip.total}
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteTrip(trip._id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CalculatorPage;
