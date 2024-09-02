/*
  Warnings:

  - You are about to drop the column `authorId` on the `todo` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `todo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `todo` DROP FOREIGN KEY `todo_authorId_fkey`;

-- AlterTable
ALTER TABLE `todo` DROP COLUMN `authorId`,
    DROP COLUMN `published`,
    ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `todo` ADD CONSTRAINT `todo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
