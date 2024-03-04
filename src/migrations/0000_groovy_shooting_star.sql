CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"short" varchar(6) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
