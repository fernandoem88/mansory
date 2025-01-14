interface Connection {
  effectiveType?: string;
}

type ConnectionType = "very-slow" | "slow" | "fast" | "very-fast";

const getConnectionType = () => {
  if (typeof navigator === "undefined") return;

  const { connection, mozConnection, webkitConnection } =
    navigator as Navigator & {
      connection?: Connection;
      mozConnection?: Connection;
      webkitConnection?: Connection;
    };

  return (
    connection?.effectiveType ??
    mozConnection?.effectiveType ??
    webkitConnection?.effectiveType
  );
};

export const detectNetworkSpeed = (): ConnectionType => {
  const connectionType = getConnectionType()?.toLowerCase();

  // by default we can consider it fast
  if (!connectionType) return "fast";

  if (connectionType.includes("2g")) return "very-slow";
  if (connectionType.includes("3g")) return "slow";
  if (connectionType.includes("4g")) return "fast";

  return "very-fast";
};
