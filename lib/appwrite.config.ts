import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOXTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6703b38c0009d641904d").setKey(" standard_ba8c140d3735eb301dab6239e93c3b174204b19a047ee2fc698733b51d9b123d1de53ebcdf080b87576c07cefd8efc23f49ff83cee571169b062157692ea856d02b3475f0e7692d656eeb0097384da9a7b8d6783dbb8cd6ae3c416dfb17a244de90365c9d1978b126d024b2d1f624f27f4554e35d671469beb4765cf4d3bf2f2");

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

