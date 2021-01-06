CREATE TABLE IF NOT EXISTS `sponsored`.`Media` (
  id VARCHAR(255) DEFAULT UUID(),
  media_id VARCHAR(255) DEFAULT UUID(),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  media_link VARCHAR(255),
  creator_id VARCHAR(255) NOT NULL,
  sponsor_id VARCHAR(255),
  PRIMARY key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



ALTER TABLE `sponsored`.`Media`
  ADD CONSTRAINT FOREIGN KEY (`creator_id`) REFERENCES `sponsored`.`Entity` (`id`);

ALTER TABLE `sponsored`.`Media`
  ADD CONSTRAINT FOREIGN KEY (`sponsor_id`) REFERENCES `sponsored`.`Entity` (`id`);