import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";

const wallet = new Keypair();

const { publicKey } = wallet;

const getWalletBalance = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const walletBalance = await connection.getBalance(publicKey);

    console.log("🚀 ~ file: main.ts:18 ~ getWalletBalance ~ walletBalance:", walletBalance)

  } catch (error) {
    console.log("🚀 ~ file: main.ts:23 ~ getWalletBalance ~ error:", error);
  }
};

const airDropSol = async () => {
  try {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    const fromAirDropSignature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL)

    await connection.confirmTransaction(fromAirDropSignature)

  } catch (error) {
    console.log("🚀 ~ file: main.ts:31 ~ airDropSol ~ error:", error)
  }
};

const main = async () => {
  await getWalletBalance();
  await airDropSol()
  await getWalletBalance();
};

main();
