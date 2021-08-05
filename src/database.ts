import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const initDatabase = () => {
  return open({
    filename: "/sandbox/database.db",
    driver: sqlite3.Database
  });
};
