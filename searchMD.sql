-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: searchmd
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `admintable`
--

DROP TABLE IF EXISTS `admintable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admintable` (
  `adminId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `alName` varchar(500) DEFAULT NULL,
  `afName` varchar(500) DEFAULT NULL,
  `userRole` varchar(1) DEFAULT 'a',
  PRIMARY KEY (`adminId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admintable`
--

INSERT INTO `admintable` VALUES (2,6,'Admin','Bob','a'),(8,7,'Admin2','Anna','a'),(10,8,'Admin3','John','a');

--
-- Table structure for table `appointmenttable`
--

DROP TABLE IF EXISTS `appointmenttable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointmenttable` (
  `appId` int NOT NULL AUTO_INCREMENT,
  `patientId` int DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `appDate` datetime DEFAULT NULL,
  PRIMARY KEY (`appId`),
  KEY `patientId` (`patientId`),
  KEY `doctorId` (`doctorId`),
  CONSTRAINT `appointmenttable_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patienttable` (`patientId`) ON DELETE CASCADE,
  CONSTRAINT `appointmenttable_ibfk_2` FOREIGN KEY (`doctorId`) REFERENCES `doctortable` (`doctorId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointmenttable`
--

INSERT INTO `appointmenttable` VALUES (44,2,8,'2022-01-13 00:00:00');

--
-- Table structure for table `doctortable`
--

DROP TABLE IF EXISTS `doctortable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctortable` (
  `doctorId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `dlName` varchar(500) DEFAULT NULL,
  `dfName` varchar(500) DEFAULT NULL,
  `specialty` varchar(500) DEFAULT NULL,
  `userRole` varchar(1) DEFAULT 'd',
  PRIMARY KEY (`doctorId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctortable`
--

INSERT INTO `doctortable` VALUES (4,3,'Smith','Bob','genereal','d'),(8,4,'Boyer','Anna','brain','d'),(10,5,'Monroe','John','genereal','d');

--
-- Table structure for table `patienttable`
--

DROP TABLE IF EXISTS `patienttable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patienttable` (
  `patientId` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `plName` varchar(500) DEFAULT NULL,
  `pfName` varchar(500) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `insuranceId` varchar(100) DEFAULT NULL,
  `userRole` varchar(1) DEFAULT 'p',
  PRIMARY KEY (`patientId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patienttable`
--

INSERT INTO `patienttable` VALUES (1,2,'Taylor','Ellis','2019-06-19 00:00:00','898080','p'),(2,1,'Meyers','Adele','2019-06-19 00:00:00','898080','p'),(3,2,'Taylor','Ellis','2019-06-19 00:00:00','898080','p');

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `password` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` VALUES (1,'User1'),(2,'User2'),(3,'User3'),(4,'User1'),(5,'User2'),(6,'User3'),(7,'User3'),(8,'User3');
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-12 10:32:19
