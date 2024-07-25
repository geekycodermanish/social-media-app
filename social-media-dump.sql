-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: social_media
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Follows`
--

DROP TABLE IF EXISTS `Follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Follows` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `followedId` int NOT NULL,
  `followerId` int NOT NULL,
  PRIMARY KEY (`followedId`,`followerId`),
  KEY `followerId` (`followerId`),
  CONSTRAINT `follows_ibfk_1` FOREIGN KEY (`followedId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `follows_ibfk_2` FOREIGN KEY (`followerId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Follows`
--

LOCK TABLES `Follows` WRITE;
/*!40000 ALTER TABLE `Follows` DISABLE KEYS */;
INSERT INTO `Follows` VALUES ('2024-07-24 14:25:59','2024-07-24 14:25:59',1,6),('2024-07-24 14:10:52','2024-07-24 14:10:52',1,11),('2024-07-24 14:11:26','2024-07-24 14:11:26',5,11),('2024-07-24 14:01:00','2024-07-24 14:01:00',6,11),('2024-07-24 14:00:54','2024-07-24 14:00:54',10,11),('2024-07-24 13:41:56','2024-07-24 13:41:56',11,6);
/*!40000 ALTER TABLE `Follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int NOT NULL,
  `PostId` int NOT NULL,
  PRIMARY KEY (`UserId`,`PostId`),
  KEY `PostId` (`PostId`),
  CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`PostId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes`
--

LOCK TABLES `Likes` WRITE;
/*!40000 ALTER TABLE `Likes` DISABLE KEYS */;
INSERT INTO `Likes` VALUES ('2024-07-24 08:30:37','2024-07-24 08:30:37',6,1),('2024-07-24 12:12:47','2024-07-24 12:12:47',10,8),('2024-07-24 12:15:45','2024-07-24 12:15:45',10,9),('2024-07-24 12:28:28','2024-07-24 12:28:28',11,2),('2024-07-24 10:08:09','2024-07-24 10:08:09',11,8),('2024-07-24 12:28:20','2024-07-24 12:28:20',11,9);
/*!40000 ALTER TABLE `Likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES (1,'This is my first post!','2024-07-22 19:28:01','2024-07-22 19:28:01',1),(2,'This is my first post!','2024-07-23 07:41:10','2024-07-23 07:41:10',1),(3,'sssss','2024-07-23 07:53:01','2024-07-23 07:53:01',5),(4,'jhh','2024-07-23 18:02:38','2024-07-23 18:02:38',5),(5,'scsadd','2024-07-24 04:21:43','2024-07-24 04:21:43',1),(6,'kjhggssaaf knklsvnsk dvjk ;sbvjk vjk k;sjkv sdjkv skjv','2024-07-24 04:21:57','2024-07-24 04:21:57',1),(7,'This is msssy first post!','2024-07-24 06:51:00','2024-07-24 06:51:00',6),(8,'this is new feed post for trail.','2024-07-24 09:56:44','2024-07-24 09:56:44',11),(9,'this feed from manish side for the trail','2024-07-24 12:12:40','2024-07-24 12:12:40',10),(10,'done.!!!','2024-07-24 14:26:16','2024-07-24 14:26:16',6);
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'john_doe','john@example.com','$2a$10$fuwvjAvjx6Ev38vPNRYU4.VoBlbw/5ERGi4CbXFB0V4K5HzEeGM3K','2024-07-22 19:21:34','2024-07-22 19:21:34','2024-07-22 19:21:34'),(4,'john_doe2','john@example2.com','$2a$10$yBYOhtkwvYdKDoVL2Abtp.6xU2d0z49InPwIUUePnc5733.LDXFNa','2024-07-22 19:29:53','2024-07-22 19:29:53','2024-07-22 19:29:53'),(5,'Manish','geekycodermanish@gmail.com','$2a$10$8cBRs96FLrBps2iHlR0jMO7bPESSNBvndyScuQ/Ep6sf5QeL5y5ji','2024-07-22 20:05:32','2024-07-22 20:05:32','2024-07-22 20:05:32'),(6,'new user','geekycodermanisha@gmail.com','$2a$10$OSDexvBR28ZDKZC1JT8eH.airflMNz2L9vMZK/YXr9dmLx1pBMK56','2024-07-24 04:28:51','2024-07-24 04:28:51','2024-07-24 04:28:51'),(10,'manish kr','manish@tryx.com','$2a$10$wDNeIPR3uIJYjiyiiSHeyOhtfotE1ELvudpOJDQdeYEOsV9vTz1cK','2024-07-24 08:03:12','2024-07-24 08:03:12','2024-07-24 08:03:12'),(11,'Test One','test@gmail.com','$2a$10$1l/6E1V.uUpHiNWBNytBPOMmStBX0klD0eLNeAs182PUloslX7776','2024-07-24 08:07:00','2024-07-24 08:07:00','2024-07-24 08:07:00'),(15,'Manish prasad','knowhiccup@gmail.com','$2a$10$EHyleyc7ioHBSkIrqzFrY.XiQOqiXNGTpWs8JRIOVhWWSaOiYRVJ2','2024-07-24 14:28:49','2024-07-24 14:28:49','2024-07-24 14:28:49');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-25 16:40:16
