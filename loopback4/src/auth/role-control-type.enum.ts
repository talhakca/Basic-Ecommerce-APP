export enum RoleControlType {
  Any = 'any', // Checks if at least one of the provided roles is within the user's roles
  All = 'all' // checks if all provided roles are within the user's roles
}