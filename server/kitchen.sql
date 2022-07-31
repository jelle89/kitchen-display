-- -------------------------------------------------------------
-- TablePlus 4.8.2(436)
--
-- https://tableplus.com/
--
-- Database: sjef_skilltest_kds
-- Generation Time: 2022-07-28 16:12:46.0430
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `orders` (`id`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Order 001', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(2, 'Order 002', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(3, 'Order 003', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(4, 'Order 004', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(5, 'Order 005', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(6, 'Order 006', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(7, 'Order 007', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(8, 'Order 008', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(9, 'Order 009', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06'),
(10, 'Order 010', 'open', '2022-07-01 14:43:06', '2022-07-01 14:43:06');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
