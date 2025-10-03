import { useState } from "react";

const Mic = () => {
  const [status, setStatus] = useState("waiting"); // 'waiting', 'granted', 'denied', 'error'

  const requestMicrophoneAccess = async () => {
    try {
      // Bu çağrı doğrudan tarayıcının kendi izin penceresini tetikleyecek
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // İzin verildiğinde
      setStatus("granted");

      // Kullanım sonrası stream'i temizle (opsiyonel)
      setTimeout(() => {
        stream.getTracks().forEach((track) => track.stop());
      }, 3000); // 3 saniye sonra mikrofonu kapat
    } catch (error) {
      // İzin verilmediğinde veya hata olduğunda
      console.error("Mikrofon izni hatası:", error);
      if (
        error.name === "NotAllowedError" ||
        error.name === "PermissionDeniedError"
      ) {
        setStatus("denied");
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full text-center">
        <h1 className="text-xl font-bold mb-4">Mikrofon İzni Testi</h1>

        {status === "waiting" && (
          <button
            onClick={requestMicrophoneAccess}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Mikrofon İzni İste
          </button>
        )}

        {status === "granted" && (
          <div className="text-green-600 font-medium">
            ✅ Mikrofon izni verildi!
          </div>
        )}

        {status === "denied" && (
          <div className="text-red-600 font-medium">
            ❌ Mikrofon izni reddedildi
          </div>
        )}

        {status === "error" && (
          <div className="text-orange-600 font-medium">⚠️ Bir hata oluştu</div>
        )}
      </div>
    </div>
  );
};

export default Mic;
