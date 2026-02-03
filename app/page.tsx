"use client";

import { useState, useEffect } from "react";

const HEART = "❤️";
const HEARTS_COUNT = 40;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function ValentinePage() {
  const [mounted, setMounted] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [saidYes, setSaidYes] = useState(false);
  const [hearts, setHearts] = useState<
    { id: number; left: number; top: number; delay: number; size: number }[]
  >([]);
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleNo = () => {
    setShowPaymentPopup(true);
    setPaymentSubmitted(false);
    setCardNumber("");
    setCardExpiry("");
    setCardCvv("");
    setCardName("");
  };

  const handleYes = () => {
    setSaidYes(true);
    const newHearts = Array.from({ length: HEARTS_COUNT }, (_, i) => ({
      id: i,
      left: randomBetween(0, 100),
      top: randomBetween(0, 100),
      delay: randomBetween(0, 2),
      size: randomBetween(12, 28),
    }));
    setHearts(newHearts);
  };

  const closePaymentPopup = () => {
    setShowPaymentPopup(false);
    setPaymentSubmitted(false);
  };

  const handleFakePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSubmitted(true);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700">
            Jade, veux-tu être ma Valentine ? 💕
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <div className="w-full sm:w-auto px-8 py-4 bg-pink-500/80 text-white font-bold text-lg rounded-2xl shadow-lg">
              Oui ! 💖
            </div>
            <div className="w-full sm:w-auto px-8 py-4 bg-slate-300/80 text-slate-700 font-bold text-lg rounded-2xl shadow-lg">
              Non
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Popup paiement factice pour dire Non */}
      {showPaymentPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closePaymentPopup}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full border-2 border-slate-200 animate-[pop-in_0.4s_ease-out] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">
              💳 Paiement requis pour dire Non
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              Montant :{" "}
              <span className="font-bold text-red-600">300 000 €</span>
            </p>

            {!paymentSubmitted ? (
              <form onSubmit={handleFakePaymentSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Numéro de carte
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Date d&apos;expiration
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nom sur la carte
                  </label>
                  <input
                    type="text"
                    placeholder="Jade Dupont"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={closePaymentPopup}
                    className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600"
                  >
                    Payer 300 000 €
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="text-2xl font-bold text-amber-700 mb-2">
                  ❌ Paiement refusé
                </p>
                <p className="text-slate-600 mb-6">
                  Tu ne peux pas payer pour dire non… C&apos;est gratuit de dire
                  Oui ! 😏💕
                </p>
                <button
                  type="button"
                  onClick={closePaymentPopup}
                  className="px-6 py-3 bg-pink-500 text-white font-bold rounded-xl hover:bg-pink-600 transition cursor-pointer"
                >
                  OK, je dis Oui alors 💖
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating hearts when Yes */}
      {saidYes && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
          {hearts.map((h) => (
            <span
              key={h.id}
              className="heart-float absolute text-pink-500 opacity-90"
              style={{
                left: `${h.left}%`,
                top: `${h.top}%`,
                fontSize: `${h.size}px`,
                animationDelay: `${h.delay}s`,
              }}
            >
              {HEART}
            </span>
          ))}
        </div>
      )}

      {!saidYes ? (
        <div className="relative z-10 text-center w-full max-w-xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 drop-shadow-sm mb-10 sm:mb-12 md:mb-14">
            Jade, veux-tu être ma Valentine ? 💕
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-stretch sm:items-center">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleYes();
              }}
              className="btn-valentine-oui py-4 sm:py-5"
            >
              Oui ! 💖
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNo();
              }}
              className="btn-valentine-non py-4 sm:py-5"
            >
              Non
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-20 text-center message-appear">
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-pink-600 drop-shadow-lg tracking-tight">
            JE T&apos;AIME
          </p>
          <p className="mt-4 text-xl sm:text-2xl text-pink-700 font-semibold">
            Jade 💕
          </p>
        </div>
      )}
    </main>
  );
}
