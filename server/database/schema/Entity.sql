CREATE TABLE IF NOT EXISTS `sponsored`.`Entity` (
  id VARCHAR(255) DEFAULT UUID(), 
  name VARCHAR(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  entity_type enum('sponsor', 'influencer'),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;