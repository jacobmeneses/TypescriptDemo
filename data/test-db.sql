CREATE TABLE "projects" (
  "id" character varying(16) NOT NULL,
  "name" character varying(30) NOT NULL,
  "short_description" character varying(50) NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp NOT NULL,
  "deleted_at" timestamp
);

INSERT INTO "projects" (
    "id", "name", "short_description", "created_at", "updated_at", "deleted_at") 
VALUES
('1',	'First project created',	'short description for first project created',	'2018-12-06 00:12:29.148456',	'2018-12-06 00:12:29.148456',	NULL),
('2',	'Second project created',	'short description for second project created',	'2018-12-06 00:12:42.283781',	'2018-12-06 00:12:42.283781',	NULL);

