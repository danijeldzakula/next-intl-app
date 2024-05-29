/**
 * Example for usage:
 *
 * import { UserRole } from '@/types/enums';
 *
 * const userRole: UserRole = UserRole.ADMIN;
 * console.log('🚀 ~ Hero ~ userRole:', userRole);
 */

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
