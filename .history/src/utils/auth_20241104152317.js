export function hasPermission(userPermissions,requiredPermissions){
    return requiredPermissions.every(permission=>userPermissions.includes(permission))
}