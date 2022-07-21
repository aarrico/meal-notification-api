import { DataSource } from "typeorm";
import config from "./config";

export const db = new DataSource(config);
