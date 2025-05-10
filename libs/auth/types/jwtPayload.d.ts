export type AuthJwtPayload = {
  sub: user.id;
  role: user.role;
  orgType: user.orgType;
};
