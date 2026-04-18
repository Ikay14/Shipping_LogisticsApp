
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model ShippingDock
 * 
 */
export type ShippingDock = $Result.DefaultSelection<Prisma.$ShippingDockPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model UserToken
 * 
 */
export type UserToken = $Result.DefaultSelection<Prisma.$UserTokenPayload>
/**
 * Model LoginHistory
 * 
 */
export type LoginHistory = $Result.DefaultSelection<Prisma.$LoginHistoryPayload>
/**
 * Model OrderHistory
 * 
 */
export type OrderHistory = $Result.DefaultSelection<Prisma.$OrderHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF',
  CUSTOMER: 'CUSTOMER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const OrderPriority: {
  STANDARD: 'STANDARD',
  EXPRESS: 'EXPRESS',
  OVERNIGHT: 'OVERNIGHT'
};

export type OrderPriority = (typeof OrderPriority)[keyof typeof OrderPriority]


export const DockStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  MAINTENANCE: 'MAINTENANCE'
};

export type DockStatus = (typeof DockStatus)[keyof typeof DockStatus]


export const TransactionType: {
  PAYMENT: 'PAYMENT',
  REFUND: 'REFUND',
  ADJUSTMENT: 'ADJUSTMENT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REVERSED: 'REVERSED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PaymentMethod: {
  CASH: 'CASH',
  CARD: 'CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  WALLET: 'WALLET'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type OrderPriority = $Enums.OrderPriority

export const OrderPriority: typeof $Enums.OrderPriority

export type DockStatus = $Enums.DockStatus

export const DockStatus: typeof $Enums.DockStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shippingDock`: Exposes CRUD operations for the **ShippingDock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingDocks
    * const shippingDocks = await prisma.shippingDock.findMany()
    * ```
    */
  get shippingDock(): Prisma.ShippingDockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userToken`: Exposes CRUD operations for the **UserToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTokens
    * const userTokens = await prisma.userToken.findMany()
    * ```
    */
  get userToken(): Prisma.UserTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loginHistory`: Exposes CRUD operations for the **LoginHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginHistories
    * const loginHistories = await prisma.loginHistory.findMany()
    * ```
    */
  get loginHistory(): Prisma.LoginHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderHistory`: Exposes CRUD operations for the **OrderHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderHistories
    * const orderHistories = await prisma.orderHistory.findMany()
    * ```
    */
  get orderHistory(): Prisma.OrderHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Order: 'Order',
    ShippingDock: 'ShippingDock',
    Transaction: 'Transaction',
    ActivityLog: 'ActivityLog',
    UserToken: 'UserToken',
    LoginHistory: 'LoginHistory',
    OrderHistory: 'OrderHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "order" | "shippingDock" | "transaction" | "activityLog" | "userToken" | "loginHistory" | "orderHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      ShippingDock: {
        payload: Prisma.$ShippingDockPayload<ExtArgs>
        fields: Prisma.ShippingDockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingDockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingDockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>
          }
          findFirst: {
            args: Prisma.ShippingDockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingDockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>
          }
          findMany: {
            args: Prisma.ShippingDockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>[]
          }
          create: {
            args: Prisma.ShippingDockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>
          }
          createMany: {
            args: Prisma.ShippingDockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippingDockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>[]
          }
          delete: {
            args: Prisma.ShippingDockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>
          }
          update: {
            args: Prisma.ShippingDockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>
          }
          deleteMany: {
            args: Prisma.ShippingDockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingDockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShippingDockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>[]
          }
          upsert: {
            args: Prisma.ShippingDockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingDockPayload>
          }
          aggregate: {
            args: Prisma.ShippingDockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippingDock>
          }
          groupBy: {
            args: Prisma.ShippingDockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingDockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingDockCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingDockCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      UserToken: {
        payload: Prisma.$UserTokenPayload<ExtArgs>
        fields: Prisma.UserTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findFirst: {
            args: Prisma.UserTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findMany: {
            args: Prisma.UserTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          create: {
            args: Prisma.UserTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          createMany: {
            args: Prisma.UserTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          delete: {
            args: Prisma.UserTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          update: {
            args: Prisma.UserTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          deleteMany: {
            args: Prisma.UserTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          upsert: {
            args: Prisma.UserTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          aggregate: {
            args: Prisma.UserTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserToken>
          }
          groupBy: {
            args: Prisma.UserTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTokenCountArgs<ExtArgs>
            result: $Utils.Optional<UserTokenCountAggregateOutputType> | number
          }
        }
      }
      LoginHistory: {
        payload: Prisma.$LoginHistoryPayload<ExtArgs>
        fields: Prisma.LoginHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>
          }
          findFirst: {
            args: Prisma.LoginHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>
          }
          findMany: {
            args: Prisma.LoginHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>[]
          }
          create: {
            args: Prisma.LoginHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>
          }
          createMany: {
            args: Prisma.LoginHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>[]
          }
          delete: {
            args: Prisma.LoginHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>
          }
          update: {
            args: Prisma.LoginHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LoginHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>[]
          }
          upsert: {
            args: Prisma.LoginHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginHistoryPayload>
          }
          aggregate: {
            args: Prisma.LoginHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginHistory>
          }
          groupBy: {
            args: Prisma.LoginHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LoginHistoryCountAggregateOutputType> | number
          }
        }
      }
      OrderHistory: {
        payload: Prisma.$OrderHistoryPayload<ExtArgs>
        fields: Prisma.OrderHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          findFirst: {
            args: Prisma.OrderHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          findMany: {
            args: Prisma.OrderHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          create: {
            args: Prisma.OrderHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          createMany: {
            args: Prisma.OrderHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          delete: {
            args: Prisma.OrderHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          update: {
            args: Prisma.OrderHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          deleteMany: {
            args: Prisma.OrderHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>[]
          }
          upsert: {
            args: Prisma.OrderHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderHistoryPayload>
          }
          aggregate: {
            args: Prisma.OrderHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderHistory>
          }
          groupBy: {
            args: Prisma.OrderHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<OrderHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    order?: OrderOmit
    shippingDock?: ShippingDockOmit
    transaction?: TransactionOmit
    activityLog?: ActivityLogOmit
    userToken?: UserTokenOmit
    loginHistory?: LoginHistoryOmit
    orderHistory?: OrderHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    transactions: number
    managedDocks: number
    activityLogs: number
    userTokens: number
    loginHistories: number
    orderHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    managedDocks?: boolean | UserCountOutputTypeCountManagedDocksArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    userTokens?: boolean | UserCountOutputTypeCountUserTokensArgs
    loginHistories?: boolean | UserCountOutputTypeCountLoginHistoriesArgs
    orderHistory?: boolean | UserCountOutputTypeCountOrderHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedDocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingDockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoginHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    transactions: number
    history: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | OrderCountOutputTypeCountTransactionsArgs
    history?: boolean | OrderCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
  }


  /**
   * Count Type ShippingDockCountOutputType
   */

  export type ShippingDockCountOutputType = {
    transactions: number
    originOrders: number
    destinationOrders: number
  }

  export type ShippingDockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | ShippingDockCountOutputTypeCountTransactionsArgs
    originOrders?: boolean | ShippingDockCountOutputTypeCountOriginOrdersArgs
    destinationOrders?: boolean | ShippingDockCountOutputTypeCountDestinationOrdersArgs
  }

  // Custom InputTypes
  /**
   * ShippingDockCountOutputType without action
   */
  export type ShippingDockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDockCountOutputType
     */
    select?: ShippingDockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShippingDockCountOutputType without action
   */
  export type ShippingDockCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * ShippingDockCountOutputType without action
   */
  export type ShippingDockCountOutputTypeCountOriginOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ShippingDockCountOutputType without action
   */
  export type ShippingDockCountOutputTypeCountDestinationOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    isEmailVerified: boolean | null
    profileImageUrl: string | null
    twoFactorSecret: string | null
    isTwoFactorEnabled: boolean | null
    lastLoginAt: Date | null
    currentLoginIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    isEmailVerified: boolean | null
    profileImageUrl: string | null
    twoFactorSecret: string | null
    isTwoFactorEnabled: boolean | null
    lastLoginAt: Date | null
    currentLoginIp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    passwordHash: number
    role: number
    isActive: number
    isEmailVerified: number
    profileImageUrl: number
    twoFactorSecret: number
    isTwoFactorEnabled: number
    lastLoginAt: number
    currentLoginIp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    isActive?: true
    isEmailVerified?: true
    profileImageUrl?: true
    twoFactorSecret?: true
    isTwoFactorEnabled?: true
    lastLoginAt?: true
    currentLoginIp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    isActive?: true
    isEmailVerified?: true
    profileImageUrl?: true
    twoFactorSecret?: true
    isTwoFactorEnabled?: true
    lastLoginAt?: true
    currentLoginIp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    role?: true
    isActive?: true
    isEmailVerified?: true
    profileImageUrl?: true
    twoFactorSecret?: true
    isTwoFactorEnabled?: true
    lastLoginAt?: true
    currentLoginIp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    isEmailVerified: boolean
    profileImageUrl: string | null
    twoFactorSecret: string | null
    isTwoFactorEnabled: boolean
    lastLoginAt: Date | null
    currentLoginIp: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: boolean
    twoFactorSecret?: boolean
    isTwoFactorEnabled?: boolean
    lastLoginAt?: boolean
    currentLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    managedDocks?: boolean | User$managedDocksArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    userTokens?: boolean | User$userTokensArgs<ExtArgs>
    loginHistories?: boolean | User$loginHistoriesArgs<ExtArgs>
    orderHistory?: boolean | User$orderHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: boolean
    twoFactorSecret?: boolean
    isTwoFactorEnabled?: boolean
    lastLoginAt?: boolean
    currentLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: boolean
    twoFactorSecret?: boolean
    isTwoFactorEnabled?: boolean
    lastLoginAt?: boolean
    currentLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: boolean
    twoFactorSecret?: boolean
    isTwoFactorEnabled?: boolean
    lastLoginAt?: boolean
    currentLoginIp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "role" | "isActive" | "isEmailVerified" | "profileImageUrl" | "twoFactorSecret" | "isTwoFactorEnabled" | "lastLoginAt" | "currentLoginIp" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    managedDocks?: boolean | User$managedDocksArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    userTokens?: boolean | User$userTokensArgs<ExtArgs>
    loginHistories?: boolean | User$loginHistoriesArgs<ExtArgs>
    orderHistory?: boolean | User$orderHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      managedDocks: Prisma.$ShippingDockPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      userTokens: Prisma.$UserTokenPayload<ExtArgs>[]
      loginHistories: Prisma.$LoginHistoryPayload<ExtArgs>[]
      orderHistory: Prisma.$OrderHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      isEmailVerified: boolean
      profileImageUrl: string | null
      twoFactorSecret: string | null
      isTwoFactorEnabled: boolean
      lastLoginAt: Date | null
      currentLoginIp: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    managedDocks<T extends User$managedDocksArgs<ExtArgs> = {}>(args?: Subset<T, User$managedDocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userTokens<T extends User$userTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$userTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loginHistories<T extends User$loginHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$loginHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderHistory<T extends User$orderHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$orderHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly twoFactorSecret: FieldRef<"User", 'String'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly currentLoginIp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.managedDocks
   */
  export type User$managedDocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    where?: ShippingDockWhereInput
    orderBy?: ShippingDockOrderByWithRelationInput | ShippingDockOrderByWithRelationInput[]
    cursor?: ShippingDockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShippingDockScalarFieldEnum | ShippingDockScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.userTokens
   */
  export type User$userTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    cursor?: UserTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * User.loginHistories
   */
  export type User$loginHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    where?: LoginHistoryWhereInput
    orderBy?: LoginHistoryOrderByWithRelationInput | LoginHistoryOrderByWithRelationInput[]
    cursor?: LoginHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginHistoryScalarFieldEnum | LoginHistoryScalarFieldEnum[]
  }

  /**
   * User.orderHistory
   */
  export type User$orderHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    cursor?: OrderHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    amount: Decimal | null
    taxAmount: Decimal | null
    shippingFee: Decimal | null
    totalAmount: Decimal | null
    weightKg: Decimal | null
    volumetricWeight: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    amount: Decimal | null
    taxAmount: Decimal | null
    shippingFee: Decimal | null
    totalAmount: Decimal | null
    weightKg: Decimal | null
    volumetricWeight: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    trackingNumber: string | null
    userId: string | null
    amount: Decimal | null
    taxAmount: Decimal | null
    shippingFee: Decimal | null
    totalAmount: Decimal | null
    notes: string | null
    status: $Enums.OrderStatus | null
    priority: $Enums.OrderPriority | null
    originAddress: string | null
    destinationAddress: string | null
    recipientName: string | null
    recipientPhone: string | null
    weightKg: Decimal | null
    volumetricWeight: Decimal | null
    dimensions: string | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    originDockId: string | null
    destinationDockId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    trackingNumber: string | null
    userId: string | null
    amount: Decimal | null
    taxAmount: Decimal | null
    shippingFee: Decimal | null
    totalAmount: Decimal | null
    notes: string | null
    status: $Enums.OrderStatus | null
    priority: $Enums.OrderPriority | null
    originAddress: string | null
    destinationAddress: string | null
    recipientName: string | null
    recipientPhone: string | null
    weightKg: Decimal | null
    volumetricWeight: Decimal | null
    dimensions: string | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    originDockId: string | null
    destinationDockId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    trackingNumber: number
    userId: number
    amount: number
    taxAmount: number
    shippingFee: number
    totalAmount: number
    notes: number
    status: number
    priority: number
    originAddress: number
    destinationAddress: number
    recipientName: number
    recipientPhone: number
    weightKg: number
    volumetricWeight: number
    dimensions: number
    estimatedDelivery: number
    actualDelivery: number
    originDockId: number
    destinationDockId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    amount?: true
    taxAmount?: true
    shippingFee?: true
    totalAmount?: true
    weightKg?: true
    volumetricWeight?: true
  }

  export type OrderSumAggregateInputType = {
    amount?: true
    taxAmount?: true
    shippingFee?: true
    totalAmount?: true
    weightKg?: true
    volumetricWeight?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    trackingNumber?: true
    userId?: true
    amount?: true
    taxAmount?: true
    shippingFee?: true
    totalAmount?: true
    notes?: true
    status?: true
    priority?: true
    originAddress?: true
    destinationAddress?: true
    recipientName?: true
    recipientPhone?: true
    weightKg?: true
    volumetricWeight?: true
    dimensions?: true
    estimatedDelivery?: true
    actualDelivery?: true
    originDockId?: true
    destinationDockId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    trackingNumber?: true
    userId?: true
    amount?: true
    taxAmount?: true
    shippingFee?: true
    totalAmount?: true
    notes?: true
    status?: true
    priority?: true
    originAddress?: true
    destinationAddress?: true
    recipientName?: true
    recipientPhone?: true
    weightKg?: true
    volumetricWeight?: true
    dimensions?: true
    estimatedDelivery?: true
    actualDelivery?: true
    originDockId?: true
    destinationDockId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    trackingNumber?: true
    userId?: true
    amount?: true
    taxAmount?: true
    shippingFee?: true
    totalAmount?: true
    notes?: true
    status?: true
    priority?: true
    originAddress?: true
    destinationAddress?: true
    recipientName?: true
    recipientPhone?: true
    weightKg?: true
    volumetricWeight?: true
    dimensions?: true
    estimatedDelivery?: true
    actualDelivery?: true
    originDockId?: true
    destinationDockId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    trackingNumber: string
    userId: string
    amount: Decimal
    taxAmount: Decimal
    shippingFee: Decimal
    totalAmount: Decimal
    notes: string | null
    status: $Enums.OrderStatus
    priority: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg: Decimal | null
    volumetricWeight: Decimal | null
    dimensions: string | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    originDockId: string | null
    destinationDockId: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    userId?: boolean
    amount?: boolean
    taxAmount?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    priority?: boolean
    originAddress?: boolean
    destinationAddress?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    weightKg?: boolean
    volumetricWeight?: boolean
    dimensions?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    originDockId?: boolean
    destinationDockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    originDock?: boolean | Order$originDockArgs<ExtArgs>
    destinationDock?: boolean | Order$destinationDockArgs<ExtArgs>
    transactions?: boolean | Order$transactionsArgs<ExtArgs>
    history?: boolean | Order$historyArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    userId?: boolean
    amount?: boolean
    taxAmount?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    priority?: boolean
    originAddress?: boolean
    destinationAddress?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    weightKg?: boolean
    volumetricWeight?: boolean
    dimensions?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    originDockId?: boolean
    destinationDockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    originDock?: boolean | Order$originDockArgs<ExtArgs>
    destinationDock?: boolean | Order$destinationDockArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trackingNumber?: boolean
    userId?: boolean
    amount?: boolean
    taxAmount?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    priority?: boolean
    originAddress?: boolean
    destinationAddress?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    weightKg?: boolean
    volumetricWeight?: boolean
    dimensions?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    originDockId?: boolean
    destinationDockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    originDock?: boolean | Order$originDockArgs<ExtArgs>
    destinationDock?: boolean | Order$destinationDockArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    trackingNumber?: boolean
    userId?: boolean
    amount?: boolean
    taxAmount?: boolean
    shippingFee?: boolean
    totalAmount?: boolean
    notes?: boolean
    status?: boolean
    priority?: boolean
    originAddress?: boolean
    destinationAddress?: boolean
    recipientName?: boolean
    recipientPhone?: boolean
    weightKg?: boolean
    volumetricWeight?: boolean
    dimensions?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    originDockId?: boolean
    destinationDockId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trackingNumber" | "userId" | "amount" | "taxAmount" | "shippingFee" | "totalAmount" | "notes" | "status" | "priority" | "originAddress" | "destinationAddress" | "recipientName" | "recipientPhone" | "weightKg" | "volumetricWeight" | "dimensions" | "estimatedDelivery" | "actualDelivery" | "originDockId" | "destinationDockId" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    originDock?: boolean | Order$originDockArgs<ExtArgs>
    destinationDock?: boolean | Order$destinationDockArgs<ExtArgs>
    transactions?: boolean | Order$transactionsArgs<ExtArgs>
    history?: boolean | Order$historyArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    originDock?: boolean | Order$originDockArgs<ExtArgs>
    destinationDock?: boolean | Order$destinationDockArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    originDock?: boolean | Order$originDockArgs<ExtArgs>
    destinationDock?: boolean | Order$destinationDockArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      originDock: Prisma.$ShippingDockPayload<ExtArgs> | null
      destinationDock: Prisma.$ShippingDockPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      history: Prisma.$OrderHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trackingNumber: string
      userId: string
      amount: Prisma.Decimal
      taxAmount: Prisma.Decimal
      shippingFee: Prisma.Decimal
      totalAmount: Prisma.Decimal
      notes: string | null
      status: $Enums.OrderStatus
      priority: $Enums.OrderPriority
      originAddress: string
      destinationAddress: string
      recipientName: string
      recipientPhone: string
      weightKg: Prisma.Decimal | null
      volumetricWeight: Prisma.Decimal | null
      dimensions: string | null
      estimatedDelivery: Date | null
      actualDelivery: Date | null
      originDockId: string | null
      destinationDockId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    originDock<T extends Order$originDockArgs<ExtArgs> = {}>(args?: Subset<T, Order$originDockArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    destinationDock<T extends Order$destinationDockArgs<ExtArgs> = {}>(args?: Subset<T, Order$destinationDockArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Order$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Order$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Order$historyArgs<ExtArgs> = {}>(args?: Subset<T, Order$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly trackingNumber: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly amount: FieldRef<"Order", 'Decimal'>
    readonly taxAmount: FieldRef<"Order", 'Decimal'>
    readonly shippingFee: FieldRef<"Order", 'Decimal'>
    readonly totalAmount: FieldRef<"Order", 'Decimal'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly priority: FieldRef<"Order", 'OrderPriority'>
    readonly originAddress: FieldRef<"Order", 'String'>
    readonly destinationAddress: FieldRef<"Order", 'String'>
    readonly recipientName: FieldRef<"Order", 'String'>
    readonly recipientPhone: FieldRef<"Order", 'String'>
    readonly weightKg: FieldRef<"Order", 'Decimal'>
    readonly volumetricWeight: FieldRef<"Order", 'Decimal'>
    readonly dimensions: FieldRef<"Order", 'String'>
    readonly estimatedDelivery: FieldRef<"Order", 'DateTime'>
    readonly actualDelivery: FieldRef<"Order", 'DateTime'>
    readonly originDockId: FieldRef<"Order", 'String'>
    readonly destinationDockId: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.originDock
   */
  export type Order$originDockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    where?: ShippingDockWhereInput
  }

  /**
   * Order.destinationDock
   */
  export type Order$destinationDockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    where?: ShippingDockWhereInput
  }

  /**
   * Order.transactions
   */
  export type Order$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Order.history
   */
  export type Order$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    cursor?: OrderHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model ShippingDock
   */

  export type AggregateShippingDock = {
    _count: ShippingDockCountAggregateOutputType | null
    _avg: ShippingDockAvgAggregateOutputType | null
    _sum: ShippingDockSumAggregateOutputType | null
    _min: ShippingDockMinAggregateOutputType | null
    _max: ShippingDockMaxAggregateOutputType | null
  }

  export type ShippingDockAvgAggregateOutputType = {
    capacity: number | null
  }

  export type ShippingDockSumAggregateOutputType = {
    capacity: number | null
  }

  export type ShippingDockMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    status: $Enums.DockStatus | null
    location: string | null
    address: string | null
    capacity: number | null
    description: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShippingDockMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    status: $Enums.DockStatus | null
    location: string | null
    address: string | null
    capacity: number | null
    description: string | null
    managerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShippingDockCountAggregateOutputType = {
    id: number
    name: number
    code: number
    status: number
    location: number
    address: number
    capacity: number
    description: number
    managerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShippingDockAvgAggregateInputType = {
    capacity?: true
  }

  export type ShippingDockSumAggregateInputType = {
    capacity?: true
  }

  export type ShippingDockMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    location?: true
    address?: true
    capacity?: true
    description?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShippingDockMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    location?: true
    address?: true
    capacity?: true
    description?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShippingDockCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    status?: true
    location?: true
    address?: true
    capacity?: true
    description?: true
    managerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShippingDockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingDock to aggregate.
     */
    where?: ShippingDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDocks to fetch.
     */
    orderBy?: ShippingDockOrderByWithRelationInput | ShippingDockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingDocks
    **/
    _count?: true | ShippingDockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingDockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingDockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingDockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingDockMaxAggregateInputType
  }

  export type GetShippingDockAggregateType<T extends ShippingDockAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingDock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingDock[P]>
      : GetScalarType<T[P], AggregateShippingDock[P]>
  }




  export type ShippingDockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingDockWhereInput
    orderBy?: ShippingDockOrderByWithAggregationInput | ShippingDockOrderByWithAggregationInput[]
    by: ShippingDockScalarFieldEnum[] | ShippingDockScalarFieldEnum
    having?: ShippingDockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingDockCountAggregateInputType | true
    _avg?: ShippingDockAvgAggregateInputType
    _sum?: ShippingDockSumAggregateInputType
    _min?: ShippingDockMinAggregateInputType
    _max?: ShippingDockMaxAggregateInputType
  }

  export type ShippingDockGroupByOutputType = {
    id: string
    name: string
    code: string
    status: $Enums.DockStatus
    location: string
    address: string | null
    capacity: number
    description: string | null
    managerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShippingDockCountAggregateOutputType | null
    _avg: ShippingDockAvgAggregateOutputType | null
    _sum: ShippingDockSumAggregateOutputType | null
    _min: ShippingDockMinAggregateOutputType | null
    _max: ShippingDockMaxAggregateOutputType | null
  }

  type GetShippingDockGroupByPayload<T extends ShippingDockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingDockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingDockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingDockGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingDockGroupByOutputType[P]>
        }
      >
    >


  export type ShippingDockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    description?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | ShippingDock$managerArgs<ExtArgs>
    transactions?: boolean | ShippingDock$transactionsArgs<ExtArgs>
    originOrders?: boolean | ShippingDock$originOrdersArgs<ExtArgs>
    destinationOrders?: boolean | ShippingDock$destinationOrdersArgs<ExtArgs>
    _count?: boolean | ShippingDockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingDock"]>

  export type ShippingDockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    description?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | ShippingDock$managerArgs<ExtArgs>
  }, ExtArgs["result"]["shippingDock"]>

  export type ShippingDockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    description?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    manager?: boolean | ShippingDock$managerArgs<ExtArgs>
  }, ExtArgs["result"]["shippingDock"]>

  export type ShippingDockSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    status?: boolean
    location?: boolean
    address?: boolean
    capacity?: boolean
    description?: boolean
    managerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShippingDockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "status" | "location" | "address" | "capacity" | "description" | "managerId" | "createdAt" | "updatedAt", ExtArgs["result"]["shippingDock"]>
  export type ShippingDockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ShippingDock$managerArgs<ExtArgs>
    transactions?: boolean | ShippingDock$transactionsArgs<ExtArgs>
    originOrders?: boolean | ShippingDock$originOrdersArgs<ExtArgs>
    destinationOrders?: boolean | ShippingDock$destinationOrdersArgs<ExtArgs>
    _count?: boolean | ShippingDockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShippingDockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ShippingDock$managerArgs<ExtArgs>
  }
  export type ShippingDockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manager?: boolean | ShippingDock$managerArgs<ExtArgs>
  }

  export type $ShippingDockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingDock"
    objects: {
      manager: Prisma.$UserPayload<ExtArgs> | null
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      originOrders: Prisma.$OrderPayload<ExtArgs>[]
      destinationOrders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      status: $Enums.DockStatus
      location: string
      address: string | null
      capacity: number
      description: string | null
      managerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shippingDock"]>
    composites: {}
  }

  type ShippingDockGetPayload<S extends boolean | null | undefined | ShippingDockDefaultArgs> = $Result.GetResult<Prisma.$ShippingDockPayload, S>

  type ShippingDockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippingDockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingDockCountAggregateInputType | true
    }

  export interface ShippingDockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingDock'], meta: { name: 'ShippingDock' } }
    /**
     * Find zero or one ShippingDock that matches the filter.
     * @param {ShippingDockFindUniqueArgs} args - Arguments to find a ShippingDock
     * @example
     * // Get one ShippingDock
     * const shippingDock = await prisma.shippingDock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingDockFindUniqueArgs>(args: SelectSubset<T, ShippingDockFindUniqueArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShippingDock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippingDockFindUniqueOrThrowArgs} args - Arguments to find a ShippingDock
     * @example
     * // Get one ShippingDock
     * const shippingDock = await prisma.shippingDock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingDockFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingDockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingDock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockFindFirstArgs} args - Arguments to find a ShippingDock
     * @example
     * // Get one ShippingDock
     * const shippingDock = await prisma.shippingDock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingDockFindFirstArgs>(args?: SelectSubset<T, ShippingDockFindFirstArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingDock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockFindFirstOrThrowArgs} args - Arguments to find a ShippingDock
     * @example
     * // Get one ShippingDock
     * const shippingDock = await prisma.shippingDock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingDockFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingDockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShippingDocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingDocks
     * const shippingDocks = await prisma.shippingDock.findMany()
     * 
     * // Get first 10 ShippingDocks
     * const shippingDocks = await prisma.shippingDock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingDockWithIdOnly = await prisma.shippingDock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingDockFindManyArgs>(args?: SelectSubset<T, ShippingDockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShippingDock.
     * @param {ShippingDockCreateArgs} args - Arguments to create a ShippingDock.
     * @example
     * // Create one ShippingDock
     * const ShippingDock = await prisma.shippingDock.create({
     *   data: {
     *     // ... data to create a ShippingDock
     *   }
     * })
     * 
     */
    create<T extends ShippingDockCreateArgs>(args: SelectSubset<T, ShippingDockCreateArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShippingDocks.
     * @param {ShippingDockCreateManyArgs} args - Arguments to create many ShippingDocks.
     * @example
     * // Create many ShippingDocks
     * const shippingDock = await prisma.shippingDock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingDockCreateManyArgs>(args?: SelectSubset<T, ShippingDockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShippingDocks and returns the data saved in the database.
     * @param {ShippingDockCreateManyAndReturnArgs} args - Arguments to create many ShippingDocks.
     * @example
     * // Create many ShippingDocks
     * const shippingDock = await prisma.shippingDock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShippingDocks and only return the `id`
     * const shippingDockWithIdOnly = await prisma.shippingDock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippingDockCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippingDockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShippingDock.
     * @param {ShippingDockDeleteArgs} args - Arguments to delete one ShippingDock.
     * @example
     * // Delete one ShippingDock
     * const ShippingDock = await prisma.shippingDock.delete({
     *   where: {
     *     // ... filter to delete one ShippingDock
     *   }
     * })
     * 
     */
    delete<T extends ShippingDockDeleteArgs>(args: SelectSubset<T, ShippingDockDeleteArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShippingDock.
     * @param {ShippingDockUpdateArgs} args - Arguments to update one ShippingDock.
     * @example
     * // Update one ShippingDock
     * const shippingDock = await prisma.shippingDock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingDockUpdateArgs>(args: SelectSubset<T, ShippingDockUpdateArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShippingDocks.
     * @param {ShippingDockDeleteManyArgs} args - Arguments to filter ShippingDocks to delete.
     * @example
     * // Delete a few ShippingDocks
     * const { count } = await prisma.shippingDock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingDockDeleteManyArgs>(args?: SelectSubset<T, ShippingDockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingDocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingDocks
     * const shippingDock = await prisma.shippingDock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingDockUpdateManyArgs>(args: SelectSubset<T, ShippingDockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingDocks and returns the data updated in the database.
     * @param {ShippingDockUpdateManyAndReturnArgs} args - Arguments to update many ShippingDocks.
     * @example
     * // Update many ShippingDocks
     * const shippingDock = await prisma.shippingDock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShippingDocks and only return the `id`
     * const shippingDockWithIdOnly = await prisma.shippingDock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShippingDockUpdateManyAndReturnArgs>(args: SelectSubset<T, ShippingDockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShippingDock.
     * @param {ShippingDockUpsertArgs} args - Arguments to update or create a ShippingDock.
     * @example
     * // Update or create a ShippingDock
     * const shippingDock = await prisma.shippingDock.upsert({
     *   create: {
     *     // ... data to create a ShippingDock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingDock we want to update
     *   }
     * })
     */
    upsert<T extends ShippingDockUpsertArgs>(args: SelectSubset<T, ShippingDockUpsertArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShippingDocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockCountArgs} args - Arguments to filter ShippingDocks to count.
     * @example
     * // Count the number of ShippingDocks
     * const count = await prisma.shippingDock.count({
     *   where: {
     *     // ... the filter for the ShippingDocks we want to count
     *   }
     * })
    **/
    count<T extends ShippingDockCountArgs>(
      args?: Subset<T, ShippingDockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingDockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingDock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingDockAggregateArgs>(args: Subset<T, ShippingDockAggregateArgs>): Prisma.PrismaPromise<GetShippingDockAggregateType<T>>

    /**
     * Group by ShippingDock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingDockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingDockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingDockGroupByArgs['orderBy'] }
        : { orderBy?: ShippingDockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingDockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingDockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingDock model
   */
  readonly fields: ShippingDockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingDock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingDockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manager<T extends ShippingDock$managerArgs<ExtArgs> = {}>(args?: Subset<T, ShippingDock$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transactions<T extends ShippingDock$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, ShippingDock$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    originOrders<T extends ShippingDock$originOrdersArgs<ExtArgs> = {}>(args?: Subset<T, ShippingDock$originOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinationOrders<T extends ShippingDock$destinationOrdersArgs<ExtArgs> = {}>(args?: Subset<T, ShippingDock$destinationOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShippingDock model
   */
  interface ShippingDockFieldRefs {
    readonly id: FieldRef<"ShippingDock", 'String'>
    readonly name: FieldRef<"ShippingDock", 'String'>
    readonly code: FieldRef<"ShippingDock", 'String'>
    readonly status: FieldRef<"ShippingDock", 'DockStatus'>
    readonly location: FieldRef<"ShippingDock", 'String'>
    readonly address: FieldRef<"ShippingDock", 'String'>
    readonly capacity: FieldRef<"ShippingDock", 'Int'>
    readonly description: FieldRef<"ShippingDock", 'String'>
    readonly managerId: FieldRef<"ShippingDock", 'String'>
    readonly createdAt: FieldRef<"ShippingDock", 'DateTime'>
    readonly updatedAt: FieldRef<"ShippingDock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShippingDock findUnique
   */
  export type ShippingDockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDock to fetch.
     */
    where: ShippingDockWhereUniqueInput
  }

  /**
   * ShippingDock findUniqueOrThrow
   */
  export type ShippingDockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDock to fetch.
     */
    where: ShippingDockWhereUniqueInput
  }

  /**
   * ShippingDock findFirst
   */
  export type ShippingDockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDock to fetch.
     */
    where?: ShippingDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDocks to fetch.
     */
    orderBy?: ShippingDockOrderByWithRelationInput | ShippingDockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingDocks.
     */
    cursor?: ShippingDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingDocks.
     */
    distinct?: ShippingDockScalarFieldEnum | ShippingDockScalarFieldEnum[]
  }

  /**
   * ShippingDock findFirstOrThrow
   */
  export type ShippingDockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDock to fetch.
     */
    where?: ShippingDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDocks to fetch.
     */
    orderBy?: ShippingDockOrderByWithRelationInput | ShippingDockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingDocks.
     */
    cursor?: ShippingDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingDocks.
     */
    distinct?: ShippingDockScalarFieldEnum | ShippingDockScalarFieldEnum[]
  }

  /**
   * ShippingDock findMany
   */
  export type ShippingDockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * Filter, which ShippingDocks to fetch.
     */
    where?: ShippingDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingDocks to fetch.
     */
    orderBy?: ShippingDockOrderByWithRelationInput | ShippingDockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingDocks.
     */
    cursor?: ShippingDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingDocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingDocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingDocks.
     */
    distinct?: ShippingDockScalarFieldEnum | ShippingDockScalarFieldEnum[]
  }

  /**
   * ShippingDock create
   */
  export type ShippingDockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * The data needed to create a ShippingDock.
     */
    data: XOR<ShippingDockCreateInput, ShippingDockUncheckedCreateInput>
  }

  /**
   * ShippingDock createMany
   */
  export type ShippingDockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingDocks.
     */
    data: ShippingDockCreateManyInput | ShippingDockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingDock createManyAndReturn
   */
  export type ShippingDockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * The data used to create many ShippingDocks.
     */
    data: ShippingDockCreateManyInput | ShippingDockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShippingDock update
   */
  export type ShippingDockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * The data needed to update a ShippingDock.
     */
    data: XOR<ShippingDockUpdateInput, ShippingDockUncheckedUpdateInput>
    /**
     * Choose, which ShippingDock to update.
     */
    where: ShippingDockWhereUniqueInput
  }

  /**
   * ShippingDock updateMany
   */
  export type ShippingDockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingDocks.
     */
    data: XOR<ShippingDockUpdateManyMutationInput, ShippingDockUncheckedUpdateManyInput>
    /**
     * Filter which ShippingDocks to update
     */
    where?: ShippingDockWhereInput
    /**
     * Limit how many ShippingDocks to update.
     */
    limit?: number
  }

  /**
   * ShippingDock updateManyAndReturn
   */
  export type ShippingDockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * The data used to update ShippingDocks.
     */
    data: XOR<ShippingDockUpdateManyMutationInput, ShippingDockUncheckedUpdateManyInput>
    /**
     * Filter which ShippingDocks to update
     */
    where?: ShippingDockWhereInput
    /**
     * Limit how many ShippingDocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShippingDock upsert
   */
  export type ShippingDockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * The filter to search for the ShippingDock to update in case it exists.
     */
    where: ShippingDockWhereUniqueInput
    /**
     * In case the ShippingDock found by the `where` argument doesn't exist, create a new ShippingDock with this data.
     */
    create: XOR<ShippingDockCreateInput, ShippingDockUncheckedCreateInput>
    /**
     * In case the ShippingDock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingDockUpdateInput, ShippingDockUncheckedUpdateInput>
  }

  /**
   * ShippingDock delete
   */
  export type ShippingDockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
    /**
     * Filter which ShippingDock to delete.
     */
    where: ShippingDockWhereUniqueInput
  }

  /**
   * ShippingDock deleteMany
   */
  export type ShippingDockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingDocks to delete
     */
    where?: ShippingDockWhereInput
    /**
     * Limit how many ShippingDocks to delete.
     */
    limit?: number
  }

  /**
   * ShippingDock.manager
   */
  export type ShippingDock$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ShippingDock.transactions
   */
  export type ShippingDock$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * ShippingDock.originOrders
   */
  export type ShippingDock$originOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * ShippingDock.destinationOrders
   */
  export type ShippingDock$destinationOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * ShippingDock without action
   */
  export type ShippingDockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingDock
     */
    select?: ShippingDockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingDock
     */
    omit?: ShippingDockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingDockInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    reference: string | null
    userId: string | null
    orderId: string | null
    shippingDockId: string | null
    amount: Decimal | null
    currency: string | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    userId: string | null
    orderId: string | null
    shippingDockId: string | null
    amount: Decimal | null
    currency: string | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    paymentMethod: $Enums.PaymentMethod | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    reference: number
    userId: number
    orderId: number
    shippingDockId: number
    amount: number
    currency: number
    type: number
    status: number
    paymentMethod: number
    notes: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    reference?: true
    userId?: true
    orderId?: true
    shippingDockId?: true
    amount?: true
    currency?: true
    type?: true
    status?: true
    paymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    reference?: true
    userId?: true
    orderId?: true
    shippingDockId?: true
    amount?: true
    currency?: true
    type?: true
    status?: true
    paymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    reference?: true
    userId?: true
    orderId?: true
    shippingDockId?: true
    amount?: true
    currency?: true
    type?: true
    status?: true
    paymentMethod?: true
    notes?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    reference: string
    userId: string
    orderId: string
    shippingDockId: string
    amount: Decimal
    currency: string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    paymentMethod: $Enums.PaymentMethod
    notes: string | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    userId?: boolean
    orderId?: boolean
    shippingDockId?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    paymentMethod?: boolean
    notes?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    shippingDock?: boolean | ShippingDockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    userId?: boolean
    orderId?: boolean
    shippingDockId?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    paymentMethod?: boolean
    notes?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    shippingDock?: boolean | ShippingDockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    userId?: boolean
    orderId?: boolean
    shippingDockId?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    paymentMethod?: boolean
    notes?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    shippingDock?: boolean | ShippingDockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    reference?: boolean
    userId?: boolean
    orderId?: boolean
    shippingDockId?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    paymentMethod?: boolean
    notes?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "userId" | "orderId" | "shippingDockId" | "amount" | "currency" | "type" | "status" | "paymentMethod" | "notes" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    shippingDock?: boolean | ShippingDockDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    shippingDock?: boolean | ShippingDockDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    shippingDock?: boolean | ShippingDockDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
      shippingDock: Prisma.$ShippingDockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      userId: string
      orderId: string
      shippingDockId: string
      amount: Prisma.Decimal
      currency: string
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      paymentMethod: $Enums.PaymentMethod
      notes: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shippingDock<T extends ShippingDockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShippingDockDefaultArgs<ExtArgs>>): Prisma__ShippingDockClient<$Result.GetResult<Prisma.$ShippingDockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly reference: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly orderId: FieldRef<"Transaction", 'String'>
    readonly shippingDockId: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly currency: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly paymentMethod: FieldRef<"Transaction", 'PaymentMethod'>
    readonly notes: FieldRef<"Transaction", 'String'>
    readonly metadata: FieldRef<"Transaction", 'Json'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    statusCode: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    ipAddress: number
    userAgent: number
    statusCode: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    statusCode?: true
  }

  export type ActivityLogSumAggregateInputType = {
    statusCode?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    ipAddress?: true
    userAgent?: true
    statusCode?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    entity: string | null
    entityId: string | null
    ipAddress: string | null
    userAgent: string | null
    statusCode: number | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    statusCode?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "ipAddress" | "userAgent" | "statusCode" | "metadata" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | ActivityLog$userArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      entity: string | null
      entityId: string | null
      ipAddress: string | null
      userAgent: string | null
      statusCode: number | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends ActivityLog$userArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entity: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly statusCode: FieldRef<"ActivityLog", 'Int'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.user
   */
  export type ActivityLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model UserToken
   */

  export type AggregateUserToken = {
    _count: UserTokenCountAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  export type UserTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    type: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    type: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    type: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type UserTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    type?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToken to aggregate.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTokens
    **/
    _count?: true | UserTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTokenMaxAggregateInputType
  }

  export type GetUserTokenAggregateType<T extends UserTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToken[P]>
      : GetScalarType<T[P], AggregateUserToken[P]>
  }




  export type UserTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithAggregationInput | UserTokenOrderByWithAggregationInput[]
    by: UserTokenScalarFieldEnum[] | UserTokenScalarFieldEnum
    having?: UserTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTokenCountAggregateInputType | true
    _min?: UserTokenMinAggregateInputType
    _max?: UserTokenMaxAggregateInputType
  }

  export type UserTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    type: string
    expiresAt: Date
    createdAt: Date
    _count: UserTokenCountAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  type GetUserTokenGroupByPayload<T extends UserTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
            : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
        }
      >
    >


  export type UserTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>

  export type UserTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    type?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type UserTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "type" | "expiresAt" | "createdAt", ExtArgs["result"]["userToken"]>
  export type UserTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      type: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userToken"]>
    composites: {}
  }

  type UserTokenGetPayload<S extends boolean | null | undefined | UserTokenDefaultArgs> = $Result.GetResult<Prisma.$UserTokenPayload, S>

  type UserTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTokenCountAggregateInputType | true
    }

  export interface UserTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToken'], meta: { name: 'UserToken' } }
    /**
     * Find zero or one UserToken that matches the filter.
     * @param {UserTokenFindUniqueArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTokenFindUniqueArgs>(args: SelectSubset<T, UserTokenFindUniqueArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTokenFindUniqueOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTokenFindFirstArgs>(args?: SelectSubset<T, UserTokenFindFirstArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTokens
     * const userTokens = await prisma.userToken.findMany()
     * 
     * // Get first 10 UserTokens
     * const userTokens = await prisma.userToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTokenWithIdOnly = await prisma.userToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTokenFindManyArgs>(args?: SelectSubset<T, UserTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserToken.
     * @param {UserTokenCreateArgs} args - Arguments to create a UserToken.
     * @example
     * // Create one UserToken
     * const UserToken = await prisma.userToken.create({
     *   data: {
     *     // ... data to create a UserToken
     *   }
     * })
     * 
     */
    create<T extends UserTokenCreateArgs>(args: SelectSubset<T, UserTokenCreateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTokens.
     * @param {UserTokenCreateManyArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTokenCreateManyArgs>(args?: SelectSubset<T, UserTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTokens and returns the data saved in the database.
     * @param {UserTokenCreateManyAndReturnArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTokens and only return the `id`
     * const userTokenWithIdOnly = await prisma.userToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, UserTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserToken.
     * @param {UserTokenDeleteArgs} args - Arguments to delete one UserToken.
     * @example
     * // Delete one UserToken
     * const UserToken = await prisma.userToken.delete({
     *   where: {
     *     // ... filter to delete one UserToken
     *   }
     * })
     * 
     */
    delete<T extends UserTokenDeleteArgs>(args: SelectSubset<T, UserTokenDeleteArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserToken.
     * @param {UserTokenUpdateArgs} args - Arguments to update one UserToken.
     * @example
     * // Update one UserToken
     * const userToken = await prisma.userToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTokenUpdateArgs>(args: SelectSubset<T, UserTokenUpdateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTokens.
     * @param {UserTokenDeleteManyArgs} args - Arguments to filter UserTokens to delete.
     * @example
     * // Delete a few UserTokens
     * const { count } = await prisma.userToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTokenDeleteManyArgs>(args?: SelectSubset<T, UserTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTokenUpdateManyArgs>(args: SelectSubset<T, UserTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens and returns the data updated in the database.
     * @param {UserTokenUpdateManyAndReturnArgs} args - Arguments to update many UserTokens.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTokens and only return the `id`
     * const userTokenWithIdOnly = await prisma.userToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, UserTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserToken.
     * @param {UserTokenUpsertArgs} args - Arguments to update or create a UserToken.
     * @example
     * // Update or create a UserToken
     * const userToken = await prisma.userToken.upsert({
     *   create: {
     *     // ... data to create a UserToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToken we want to update
     *   }
     * })
     */
    upsert<T extends UserTokenUpsertArgs>(args: SelectSubset<T, UserTokenUpsertArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenCountArgs} args - Arguments to filter UserTokens to count.
     * @example
     * // Count the number of UserTokens
     * const count = await prisma.userToken.count({
     *   where: {
     *     // ... the filter for the UserTokens we want to count
     *   }
     * })
    **/
    count<T extends UserTokenCountArgs>(
      args?: Subset<T, UserTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTokenAggregateArgs>(args: Subset<T, UserTokenAggregateArgs>): Prisma.PrismaPromise<GetUserTokenAggregateType<T>>

    /**
     * Group by UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTokenGroupByArgs['orderBy'] }
        : { orderBy?: UserTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToken model
   */
  readonly fields: UserTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserToken model
   */
  interface UserTokenFieldRefs {
    readonly id: FieldRef<"UserToken", 'String'>
    readonly token: FieldRef<"UserToken", 'String'>
    readonly userId: FieldRef<"UserToken", 'String'>
    readonly type: FieldRef<"UserToken", 'String'>
    readonly expiresAt: FieldRef<"UserToken", 'DateTime'>
    readonly createdAt: FieldRef<"UserToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserToken findUnique
   */
  export type UserTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findUniqueOrThrow
   */
  export type UserTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findFirst
   */
  export type UserTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findFirstOrThrow
   */
  export type UserTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findMany
   */
  export type UserTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserTokens to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken create
   */
  export type UserTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToken.
     */
    data: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
  }

  /**
   * UserToken createMany
   */
  export type UserTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserToken createManyAndReturn
   */
  export type UserTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToken update
   */
  export type UserTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToken.
     */
    data: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
    /**
     * Choose, which UserToken to update.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken updateMany
   */
  export type UserTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
  }

  /**
   * UserToken updateManyAndReturn
   */
  export type UserTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToken upsert
   */
  export type UserTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToken to update in case it exists.
     */
    where: UserTokenWhereUniqueInput
    /**
     * In case the UserToken found by the `where` argument doesn't exist, create a new UserToken with this data.
     */
    create: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
    /**
     * In case the UserToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
  }

  /**
   * UserToken delete
   */
  export type UserTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter which UserToken to delete.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken deleteMany
   */
  export type UserTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTokens to delete
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to delete.
     */
    limit?: number
  }

  /**
   * UserToken without action
   */
  export type UserTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
  }


  /**
   * Model LoginHistory
   */

  export type AggregateLoginHistory = {
    _count: LoginHistoryCountAggregateOutputType | null
    _min: LoginHistoryMinAggregateOutputType | null
    _max: LoginHistoryMaxAggregateOutputType | null
  }

  export type LoginHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    isSuccessful: boolean | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type LoginHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ipAddress: string | null
    userAgent: string | null
    isSuccessful: boolean | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type LoginHistoryCountAggregateOutputType = {
    id: number
    userId: number
    ipAddress: number
    userAgent: number
    isSuccessful: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type LoginHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    isSuccessful?: true
    errorMessage?: true
    createdAt?: true
  }

  export type LoginHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    isSuccessful?: true
    errorMessage?: true
    createdAt?: true
  }

  export type LoginHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    isSuccessful?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type LoginHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginHistory to aggregate.
     */
    where?: LoginHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginHistories to fetch.
     */
    orderBy?: LoginHistoryOrderByWithRelationInput | LoginHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginHistories
    **/
    _count?: true | LoginHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginHistoryMaxAggregateInputType
  }

  export type GetLoginHistoryAggregateType<T extends LoginHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginHistory[P]>
      : GetScalarType<T[P], AggregateLoginHistory[P]>
  }




  export type LoginHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginHistoryWhereInput
    orderBy?: LoginHistoryOrderByWithAggregationInput | LoginHistoryOrderByWithAggregationInput[]
    by: LoginHistoryScalarFieldEnum[] | LoginHistoryScalarFieldEnum
    having?: LoginHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginHistoryCountAggregateInputType | true
    _min?: LoginHistoryMinAggregateInputType
    _max?: LoginHistoryMaxAggregateInputType
  }

  export type LoginHistoryGroupByOutputType = {
    id: string
    userId: string
    ipAddress: string | null
    userAgent: string | null
    isSuccessful: boolean
    errorMessage: string | null
    createdAt: Date
    _count: LoginHistoryCountAggregateOutputType | null
    _min: LoginHistoryMinAggregateOutputType | null
    _max: LoginHistoryMaxAggregateOutputType | null
  }

  type GetLoginHistoryGroupByPayload<T extends LoginHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LoginHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LoginHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isSuccessful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginHistory"]>

  export type LoginHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isSuccessful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginHistory"]>

  export type LoginHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isSuccessful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loginHistory"]>

  export type LoginHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    isSuccessful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type LoginHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ipAddress" | "userAgent" | "isSuccessful" | "errorMessage" | "createdAt", ExtArgs["result"]["loginHistory"]>
  export type LoginHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoginHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoginHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoginHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ipAddress: string | null
      userAgent: string | null
      isSuccessful: boolean
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["loginHistory"]>
    composites: {}
  }

  type LoginHistoryGetPayload<S extends boolean | null | undefined | LoginHistoryDefaultArgs> = $Result.GetResult<Prisma.$LoginHistoryPayload, S>

  type LoginHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginHistoryCountAggregateInputType | true
    }

  export interface LoginHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginHistory'], meta: { name: 'LoginHistory' } }
    /**
     * Find zero or one LoginHistory that matches the filter.
     * @param {LoginHistoryFindUniqueArgs} args - Arguments to find a LoginHistory
     * @example
     * // Get one LoginHistory
     * const loginHistory = await prisma.loginHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginHistoryFindUniqueArgs>(args: SelectSubset<T, LoginHistoryFindUniqueArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginHistoryFindUniqueOrThrowArgs} args - Arguments to find a LoginHistory
     * @example
     * // Get one LoginHistory
     * const loginHistory = await prisma.loginHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryFindFirstArgs} args - Arguments to find a LoginHistory
     * @example
     * // Get one LoginHistory
     * const loginHistory = await prisma.loginHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginHistoryFindFirstArgs>(args?: SelectSubset<T, LoginHistoryFindFirstArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryFindFirstOrThrowArgs} args - Arguments to find a LoginHistory
     * @example
     * // Get one LoginHistory
     * const loginHistory = await prisma.loginHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginHistories
     * const loginHistories = await prisma.loginHistory.findMany()
     * 
     * // Get first 10 LoginHistories
     * const loginHistories = await prisma.loginHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginHistoryWithIdOnly = await prisma.loginHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginHistoryFindManyArgs>(args?: SelectSubset<T, LoginHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginHistory.
     * @param {LoginHistoryCreateArgs} args - Arguments to create a LoginHistory.
     * @example
     * // Create one LoginHistory
     * const LoginHistory = await prisma.loginHistory.create({
     *   data: {
     *     // ... data to create a LoginHistory
     *   }
     * })
     * 
     */
    create<T extends LoginHistoryCreateArgs>(args: SelectSubset<T, LoginHistoryCreateArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginHistories.
     * @param {LoginHistoryCreateManyArgs} args - Arguments to create many LoginHistories.
     * @example
     * // Create many LoginHistories
     * const loginHistory = await prisma.loginHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginHistoryCreateManyArgs>(args?: SelectSubset<T, LoginHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginHistories and returns the data saved in the database.
     * @param {LoginHistoryCreateManyAndReturnArgs} args - Arguments to create many LoginHistories.
     * @example
     * // Create many LoginHistories
     * const loginHistory = await prisma.loginHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginHistories and only return the `id`
     * const loginHistoryWithIdOnly = await prisma.loginHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoginHistory.
     * @param {LoginHistoryDeleteArgs} args - Arguments to delete one LoginHistory.
     * @example
     * // Delete one LoginHistory
     * const LoginHistory = await prisma.loginHistory.delete({
     *   where: {
     *     // ... filter to delete one LoginHistory
     *   }
     * })
     * 
     */
    delete<T extends LoginHistoryDeleteArgs>(args: SelectSubset<T, LoginHistoryDeleteArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginHistory.
     * @param {LoginHistoryUpdateArgs} args - Arguments to update one LoginHistory.
     * @example
     * // Update one LoginHistory
     * const loginHistory = await prisma.loginHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginHistoryUpdateArgs>(args: SelectSubset<T, LoginHistoryUpdateArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginHistories.
     * @param {LoginHistoryDeleteManyArgs} args - Arguments to filter LoginHistories to delete.
     * @example
     * // Delete a few LoginHistories
     * const { count } = await prisma.loginHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginHistoryDeleteManyArgs>(args?: SelectSubset<T, LoginHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginHistories
     * const loginHistory = await prisma.loginHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginHistoryUpdateManyArgs>(args: SelectSubset<T, LoginHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginHistories and returns the data updated in the database.
     * @param {LoginHistoryUpdateManyAndReturnArgs} args - Arguments to update many LoginHistories.
     * @example
     * // Update many LoginHistories
     * const loginHistory = await prisma.loginHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoginHistories and only return the `id`
     * const loginHistoryWithIdOnly = await prisma.loginHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoginHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoginHistory.
     * @param {LoginHistoryUpsertArgs} args - Arguments to update or create a LoginHistory.
     * @example
     * // Update or create a LoginHistory
     * const loginHistory = await prisma.loginHistory.upsert({
     *   create: {
     *     // ... data to create a LoginHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginHistory we want to update
     *   }
     * })
     */
    upsert<T extends LoginHistoryUpsertArgs>(args: SelectSubset<T, LoginHistoryUpsertArgs<ExtArgs>>): Prisma__LoginHistoryClient<$Result.GetResult<Prisma.$LoginHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryCountArgs} args - Arguments to filter LoginHistories to count.
     * @example
     * // Count the number of LoginHistories
     * const count = await prisma.loginHistory.count({
     *   where: {
     *     // ... the filter for the LoginHistories we want to count
     *   }
     * })
    **/
    count<T extends LoginHistoryCountArgs>(
      args?: Subset<T, LoginHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginHistoryAggregateArgs>(args: Subset<T, LoginHistoryAggregateArgs>): Prisma.PrismaPromise<GetLoginHistoryAggregateType<T>>

    /**
     * Group by LoginHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LoginHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginHistory model
   */
  readonly fields: LoginHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoginHistory model
   */
  interface LoginHistoryFieldRefs {
    readonly id: FieldRef<"LoginHistory", 'String'>
    readonly userId: FieldRef<"LoginHistory", 'String'>
    readonly ipAddress: FieldRef<"LoginHistory", 'String'>
    readonly userAgent: FieldRef<"LoginHistory", 'String'>
    readonly isSuccessful: FieldRef<"LoginHistory", 'Boolean'>
    readonly errorMessage: FieldRef<"LoginHistory", 'String'>
    readonly createdAt: FieldRef<"LoginHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginHistory findUnique
   */
  export type LoginHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoginHistory to fetch.
     */
    where: LoginHistoryWhereUniqueInput
  }

  /**
   * LoginHistory findUniqueOrThrow
   */
  export type LoginHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoginHistory to fetch.
     */
    where: LoginHistoryWhereUniqueInput
  }

  /**
   * LoginHistory findFirst
   */
  export type LoginHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoginHistory to fetch.
     */
    where?: LoginHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginHistories to fetch.
     */
    orderBy?: LoginHistoryOrderByWithRelationInput | LoginHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginHistories.
     */
    cursor?: LoginHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginHistories.
     */
    distinct?: LoginHistoryScalarFieldEnum | LoginHistoryScalarFieldEnum[]
  }

  /**
   * LoginHistory findFirstOrThrow
   */
  export type LoginHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoginHistory to fetch.
     */
    where?: LoginHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginHistories to fetch.
     */
    orderBy?: LoginHistoryOrderByWithRelationInput | LoginHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginHistories.
     */
    cursor?: LoginHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginHistories.
     */
    distinct?: LoginHistoryScalarFieldEnum | LoginHistoryScalarFieldEnum[]
  }

  /**
   * LoginHistory findMany
   */
  export type LoginHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LoginHistories to fetch.
     */
    where?: LoginHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginHistories to fetch.
     */
    orderBy?: LoginHistoryOrderByWithRelationInput | LoginHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginHistories.
     */
    cursor?: LoginHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginHistories.
     */
    distinct?: LoginHistoryScalarFieldEnum | LoginHistoryScalarFieldEnum[]
  }

  /**
   * LoginHistory create
   */
  export type LoginHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginHistory.
     */
    data: XOR<LoginHistoryCreateInput, LoginHistoryUncheckedCreateInput>
  }

  /**
   * LoginHistory createMany
   */
  export type LoginHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginHistories.
     */
    data: LoginHistoryCreateManyInput | LoginHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoginHistory createManyAndReturn
   */
  export type LoginHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many LoginHistories.
     */
    data: LoginHistoryCreateManyInput | LoginHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginHistory update
   */
  export type LoginHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginHistory.
     */
    data: XOR<LoginHistoryUpdateInput, LoginHistoryUncheckedUpdateInput>
    /**
     * Choose, which LoginHistory to update.
     */
    where: LoginHistoryWhereUniqueInput
  }

  /**
   * LoginHistory updateMany
   */
  export type LoginHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginHistories.
     */
    data: XOR<LoginHistoryUpdateManyMutationInput, LoginHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LoginHistories to update
     */
    where?: LoginHistoryWhereInput
    /**
     * Limit how many LoginHistories to update.
     */
    limit?: number
  }

  /**
   * LoginHistory updateManyAndReturn
   */
  export type LoginHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * The data used to update LoginHistories.
     */
    data: XOR<LoginHistoryUpdateManyMutationInput, LoginHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LoginHistories to update
     */
    where?: LoginHistoryWhereInput
    /**
     * Limit how many LoginHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginHistory upsert
   */
  export type LoginHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginHistory to update in case it exists.
     */
    where: LoginHistoryWhereUniqueInput
    /**
     * In case the LoginHistory found by the `where` argument doesn't exist, create a new LoginHistory with this data.
     */
    create: XOR<LoginHistoryCreateInput, LoginHistoryUncheckedCreateInput>
    /**
     * In case the LoginHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginHistoryUpdateInput, LoginHistoryUncheckedUpdateInput>
  }

  /**
   * LoginHistory delete
   */
  export type LoginHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
    /**
     * Filter which LoginHistory to delete.
     */
    where: LoginHistoryWhereUniqueInput
  }

  /**
   * LoginHistory deleteMany
   */
  export type LoginHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginHistories to delete
     */
    where?: LoginHistoryWhereInput
    /**
     * Limit how many LoginHistories to delete.
     */
    limit?: number
  }

  /**
   * LoginHistory without action
   */
  export type LoginHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginHistory
     */
    select?: LoginHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginHistory
     */
    omit?: LoginHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginHistoryInclude<ExtArgs> | null
  }


  /**
   * Model OrderHistory
   */

  export type AggregateOrderHistory = {
    _count: OrderHistoryCountAggregateOutputType | null
    _min: OrderHistoryMinAggregateOutputType | null
    _max: OrderHistoryMaxAggregateOutputType | null
  }

  export type OrderHistoryMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    notes: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type OrderHistoryMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    notes: string | null
    actorId: string | null
    createdAt: Date | null
  }

  export type OrderHistoryCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    notes: number
    actorId: number
    createdAt: number
    _all: number
  }


  export type OrderHistoryMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    notes?: true
    actorId?: true
    createdAt?: true
  }

  export type OrderHistoryMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    notes?: true
    actorId?: true
    createdAt?: true
  }

  export type OrderHistoryCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    notes?: true
    actorId?: true
    createdAt?: true
    _all?: true
  }

  export type OrderHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderHistory to aggregate.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderHistories
    **/
    _count?: true | OrderHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderHistoryMaxAggregateInputType
  }

  export type GetOrderHistoryAggregateType<T extends OrderHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderHistory[P]>
      : GetScalarType<T[P], AggregateOrderHistory[P]>
  }




  export type OrderHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderHistoryWhereInput
    orderBy?: OrderHistoryOrderByWithAggregationInput | OrderHistoryOrderByWithAggregationInput[]
    by: OrderHistoryScalarFieldEnum[] | OrderHistoryScalarFieldEnum
    having?: OrderHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderHistoryCountAggregateInputType | true
    _min?: OrderHistoryMinAggregateInputType
    _max?: OrderHistoryMaxAggregateInputType
  }

  export type OrderHistoryGroupByOutputType = {
    id: string
    orderId: string
    status: $Enums.OrderStatus
    notes: string | null
    actorId: string | null
    createdAt: Date
    _count: OrderHistoryCountAggregateOutputType | null
    _min: OrderHistoryMinAggregateOutputType | null
    _max: OrderHistoryMaxAggregateOutputType | null
  }

  type GetOrderHistoryGroupByPayload<T extends OrderHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OrderHistoryGroupByOutputType[P]>
        }
      >
    >


  export type OrderHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    notes?: boolean
    actorId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    actor?: boolean | OrderHistory$actorArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    notes?: boolean
    actorId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    actor?: boolean | OrderHistory$actorArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    notes?: boolean
    actorId?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    actor?: boolean | OrderHistory$actorArgs<ExtArgs>
  }, ExtArgs["result"]["orderHistory"]>

  export type OrderHistorySelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    notes?: boolean
    actorId?: boolean
    createdAt?: boolean
  }

  export type OrderHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "status" | "notes" | "actorId" | "createdAt", ExtArgs["result"]["orderHistory"]>
  export type OrderHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    actor?: boolean | OrderHistory$actorArgs<ExtArgs>
  }
  export type OrderHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    actor?: boolean | OrderHistory$actorArgs<ExtArgs>
  }
  export type OrderHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    actor?: boolean | OrderHistory$actorArgs<ExtArgs>
  }

  export type $OrderHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderHistory"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: $Enums.OrderStatus
      notes: string | null
      actorId: string | null
      createdAt: Date
    }, ExtArgs["result"]["orderHistory"]>
    composites: {}
  }

  type OrderHistoryGetPayload<S extends boolean | null | undefined | OrderHistoryDefaultArgs> = $Result.GetResult<Prisma.$OrderHistoryPayload, S>

  type OrderHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderHistoryCountAggregateInputType | true
    }

  export interface OrderHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderHistory'], meta: { name: 'OrderHistory' } }
    /**
     * Find zero or one OrderHistory that matches the filter.
     * @param {OrderHistoryFindUniqueArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderHistoryFindUniqueArgs>(args: SelectSubset<T, OrderHistoryFindUniqueArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderHistoryFindUniqueOrThrowArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindFirstArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderHistoryFindFirstArgs>(args?: SelectSubset<T, OrderHistoryFindFirstArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindFirstOrThrowArgs} args - Arguments to find a OrderHistory
     * @example
     * // Get one OrderHistory
     * const orderHistory = await prisma.orderHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderHistories
     * const orderHistories = await prisma.orderHistory.findMany()
     * 
     * // Get first 10 OrderHistories
     * const orderHistories = await prisma.orderHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderHistoryWithIdOnly = await prisma.orderHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderHistoryFindManyArgs>(args?: SelectSubset<T, OrderHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderHistory.
     * @param {OrderHistoryCreateArgs} args - Arguments to create a OrderHistory.
     * @example
     * // Create one OrderHistory
     * const OrderHistory = await prisma.orderHistory.create({
     *   data: {
     *     // ... data to create a OrderHistory
     *   }
     * })
     * 
     */
    create<T extends OrderHistoryCreateArgs>(args: SelectSubset<T, OrderHistoryCreateArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderHistories.
     * @param {OrderHistoryCreateManyArgs} args - Arguments to create many OrderHistories.
     * @example
     * // Create many OrderHistories
     * const orderHistory = await prisma.orderHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderHistoryCreateManyArgs>(args?: SelectSubset<T, OrderHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderHistories and returns the data saved in the database.
     * @param {OrderHistoryCreateManyAndReturnArgs} args - Arguments to create many OrderHistories.
     * @example
     * // Create many OrderHistories
     * const orderHistory = await prisma.orderHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderHistories and only return the `id`
     * const orderHistoryWithIdOnly = await prisma.orderHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderHistory.
     * @param {OrderHistoryDeleteArgs} args - Arguments to delete one OrderHistory.
     * @example
     * // Delete one OrderHistory
     * const OrderHistory = await prisma.orderHistory.delete({
     *   where: {
     *     // ... filter to delete one OrderHistory
     *   }
     * })
     * 
     */
    delete<T extends OrderHistoryDeleteArgs>(args: SelectSubset<T, OrderHistoryDeleteArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderHistory.
     * @param {OrderHistoryUpdateArgs} args - Arguments to update one OrderHistory.
     * @example
     * // Update one OrderHistory
     * const orderHistory = await prisma.orderHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderHistoryUpdateArgs>(args: SelectSubset<T, OrderHistoryUpdateArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderHistories.
     * @param {OrderHistoryDeleteManyArgs} args - Arguments to filter OrderHistories to delete.
     * @example
     * // Delete a few OrderHistories
     * const { count } = await prisma.orderHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderHistoryDeleteManyArgs>(args?: SelectSubset<T, OrderHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderHistories
     * const orderHistory = await prisma.orderHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderHistoryUpdateManyArgs>(args: SelectSubset<T, OrderHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderHistories and returns the data updated in the database.
     * @param {OrderHistoryUpdateManyAndReturnArgs} args - Arguments to update many OrderHistories.
     * @example
     * // Update many OrderHistories
     * const orderHistory = await prisma.orderHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderHistories and only return the `id`
     * const orderHistoryWithIdOnly = await prisma.orderHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderHistory.
     * @param {OrderHistoryUpsertArgs} args - Arguments to update or create a OrderHistory.
     * @example
     * // Update or create a OrderHistory
     * const orderHistory = await prisma.orderHistory.upsert({
     *   create: {
     *     // ... data to create a OrderHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderHistory we want to update
     *   }
     * })
     */
    upsert<T extends OrderHistoryUpsertArgs>(args: SelectSubset<T, OrderHistoryUpsertArgs<ExtArgs>>): Prisma__OrderHistoryClient<$Result.GetResult<Prisma.$OrderHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryCountArgs} args - Arguments to filter OrderHistories to count.
     * @example
     * // Count the number of OrderHistories
     * const count = await prisma.orderHistory.count({
     *   where: {
     *     // ... the filter for the OrderHistories we want to count
     *   }
     * })
    **/
    count<T extends OrderHistoryCountArgs>(
      args?: Subset<T, OrderHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderHistoryAggregateArgs>(args: Subset<T, OrderHistoryAggregateArgs>): Prisma.PrismaPromise<GetOrderHistoryAggregateType<T>>

    /**
     * Group by OrderHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OrderHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderHistory model
   */
  readonly fields: OrderHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends OrderHistory$actorArgs<ExtArgs> = {}>(args?: Subset<T, OrderHistory$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderHistory model
   */
  interface OrderHistoryFieldRefs {
    readonly id: FieldRef<"OrderHistory", 'String'>
    readonly orderId: FieldRef<"OrderHistory", 'String'>
    readonly status: FieldRef<"OrderHistory", 'OrderStatus'>
    readonly notes: FieldRef<"OrderHistory", 'String'>
    readonly actorId: FieldRef<"OrderHistory", 'String'>
    readonly createdAt: FieldRef<"OrderHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderHistory findUnique
   */
  export type OrderHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory findUniqueOrThrow
   */
  export type OrderHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory findFirst
   */
  export type OrderHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory findFirstOrThrow
   */
  export type OrderHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistory to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory findMany
   */
  export type OrderHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter, which OrderHistories to fetch.
     */
    where?: OrderHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderHistories to fetch.
     */
    orderBy?: OrderHistoryOrderByWithRelationInput | OrderHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderHistories.
     */
    cursor?: OrderHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderHistories.
     */
    distinct?: OrderHistoryScalarFieldEnum | OrderHistoryScalarFieldEnum[]
  }

  /**
   * OrderHistory create
   */
  export type OrderHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderHistory.
     */
    data: XOR<OrderHistoryCreateInput, OrderHistoryUncheckedCreateInput>
  }

  /**
   * OrderHistory createMany
   */
  export type OrderHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderHistories.
     */
    data: OrderHistoryCreateManyInput | OrderHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderHistory createManyAndReturn
   */
  export type OrderHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many OrderHistories.
     */
    data: OrderHistoryCreateManyInput | OrderHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderHistory update
   */
  export type OrderHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderHistory.
     */
    data: XOR<OrderHistoryUpdateInput, OrderHistoryUncheckedUpdateInput>
    /**
     * Choose, which OrderHistory to update.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory updateMany
   */
  export type OrderHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderHistories.
     */
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderHistories to update
     */
    where?: OrderHistoryWhereInput
    /**
     * Limit how many OrderHistories to update.
     */
    limit?: number
  }

  /**
   * OrderHistory updateManyAndReturn
   */
  export type OrderHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * The data used to update OrderHistories.
     */
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyInput>
    /**
     * Filter which OrderHistories to update
     */
    where?: OrderHistoryWhereInput
    /**
     * Limit how many OrderHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderHistory upsert
   */
  export type OrderHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderHistory to update in case it exists.
     */
    where: OrderHistoryWhereUniqueInput
    /**
     * In case the OrderHistory found by the `where` argument doesn't exist, create a new OrderHistory with this data.
     */
    create: XOR<OrderHistoryCreateInput, OrderHistoryUncheckedCreateInput>
    /**
     * In case the OrderHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderHistoryUpdateInput, OrderHistoryUncheckedUpdateInput>
  }

  /**
   * OrderHistory delete
   */
  export type OrderHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
    /**
     * Filter which OrderHistory to delete.
     */
    where: OrderHistoryWhereUniqueInput
  }

  /**
   * OrderHistory deleteMany
   */
  export type OrderHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderHistories to delete
     */
    where?: OrderHistoryWhereInput
    /**
     * Limit how many OrderHistories to delete.
     */
    limit?: number
  }

  /**
   * OrderHistory.actor
   */
  export type OrderHistory$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * OrderHistory without action
   */
  export type OrderHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderHistory
     */
    select?: OrderHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderHistory
     */
    omit?: OrderHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    isEmailVerified: 'isEmailVerified',
    profileImageUrl: 'profileImageUrl',
    twoFactorSecret: 'twoFactorSecret',
    isTwoFactorEnabled: 'isTwoFactorEnabled',
    lastLoginAt: 'lastLoginAt',
    currentLoginIp: 'currentLoginIp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    trackingNumber: 'trackingNumber',
    userId: 'userId',
    amount: 'amount',
    taxAmount: 'taxAmount',
    shippingFee: 'shippingFee',
    totalAmount: 'totalAmount',
    notes: 'notes',
    status: 'status',
    priority: 'priority',
    originAddress: 'originAddress',
    destinationAddress: 'destinationAddress',
    recipientName: 'recipientName',
    recipientPhone: 'recipientPhone',
    weightKg: 'weightKg',
    volumetricWeight: 'volumetricWeight',
    dimensions: 'dimensions',
    estimatedDelivery: 'estimatedDelivery',
    actualDelivery: 'actualDelivery',
    originDockId: 'originDockId',
    destinationDockId: 'destinationDockId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ShippingDockScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    status: 'status',
    location: 'location',
    address: 'address',
    capacity: 'capacity',
    description: 'description',
    managerId: 'managerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShippingDockScalarFieldEnum = (typeof ShippingDockScalarFieldEnum)[keyof typeof ShippingDockScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    userId: 'userId',
    orderId: 'orderId',
    shippingDockId: 'shippingDockId',
    amount: 'amount',
    currency: 'currency',
    type: 'type',
    status: 'status',
    paymentMethod: 'paymentMethod',
    notes: 'notes',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    statusCode: 'statusCode',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const UserTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    type: 'type',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type UserTokenScalarFieldEnum = (typeof UserTokenScalarFieldEnum)[keyof typeof UserTokenScalarFieldEnum]


  export const LoginHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    isSuccessful: 'isSuccessful',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type LoginHistoryScalarFieldEnum = (typeof LoginHistoryScalarFieldEnum)[keyof typeof LoginHistoryScalarFieldEnum]


  export const OrderHistoryScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    notes: 'notes',
    actorId: 'actorId',
    createdAt: 'createdAt'
  };

  export type OrderHistoryScalarFieldEnum = (typeof OrderHistoryScalarFieldEnum)[keyof typeof OrderHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'OrderPriority'
   */
  export type EnumOrderPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderPriority'>
    


  /**
   * Reference to a field of type 'OrderPriority[]'
   */
  export type ListEnumOrderPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderPriority[]'>
    


  /**
   * Reference to a field of type 'DockStatus'
   */
  export type EnumDockStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DockStatus'>
    


  /**
   * Reference to a field of type 'DockStatus[]'
   */
  export type ListEnumDockStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DockStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    currentLoginIp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    transactions?: TransactionListRelationFilter
    managedDocks?: ShippingDockListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    userTokens?: UserTokenListRelationFilter
    loginHistories?: LoginHistoryListRelationFilter
    orderHistory?: OrderHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    isTwoFactorEnabled?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    currentLoginIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    managedDocks?: ShippingDockOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    userTokens?: UserTokenOrderByRelationAggregateInput
    loginHistories?: LoginHistoryOrderByRelationAggregateInput
    orderHistory?: OrderHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    isEmailVerified?: BoolFilter<"User"> | boolean
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    twoFactorSecret?: StringNullableFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    currentLoginIp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
    transactions?: TransactionListRelationFilter
    managedDocks?: ShippingDockListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    userTokens?: UserTokenListRelationFilter
    loginHistories?: LoginHistoryListRelationFilter
    orderHistory?: OrderHistoryListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    twoFactorSecret?: SortOrderInput | SortOrder
    isTwoFactorEnabled?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    currentLoginIp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    twoFactorSecret?: StringNullableWithAggregatesFilter<"User"> | string | null
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    currentLoginIp?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    trackingNumber?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumOrderPriorityFilter<"Order"> | $Enums.OrderPriority
    originAddress?: StringFilter<"Order"> | string
    destinationAddress?: StringFilter<"Order"> | string
    recipientName?: StringFilter<"Order"> | string
    recipientPhone?: StringFilter<"Order"> | string
    weightKg?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    dimensions?: StringNullableFilter<"Order"> | string | null
    estimatedDelivery?: DateTimeNullableFilter<"Order"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Order"> | Date | string | null
    originDockId?: StringNullableFilter<"Order"> | string | null
    destinationDockId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    originDock?: XOR<ShippingDockNullableScalarRelationFilter, ShippingDockWhereInput> | null
    destinationDock?: XOR<ShippingDockNullableScalarRelationFilter, ShippingDockWhereInput> | null
    transactions?: TransactionListRelationFilter
    history?: OrderHistoryListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    originAddress?: SortOrder
    destinationAddress?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    volumetricWeight?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    actualDelivery?: SortOrderInput | SortOrder
    originDockId?: SortOrderInput | SortOrder
    destinationDockId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    originDock?: ShippingDockOrderByWithRelationInput
    destinationDock?: ShippingDockOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    history?: OrderHistoryOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trackingNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumOrderPriorityFilter<"Order"> | $Enums.OrderPriority
    originAddress?: StringFilter<"Order"> | string
    destinationAddress?: StringFilter<"Order"> | string
    recipientName?: StringFilter<"Order"> | string
    recipientPhone?: StringFilter<"Order"> | string
    weightKg?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    dimensions?: StringNullableFilter<"Order"> | string | null
    estimatedDelivery?: DateTimeNullableFilter<"Order"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Order"> | Date | string | null
    originDockId?: StringNullableFilter<"Order"> | string | null
    destinationDockId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    originDock?: XOR<ShippingDockNullableScalarRelationFilter, ShippingDockWhereInput> | null
    destinationDock?: XOR<ShippingDockNullableScalarRelationFilter, ShippingDockWhereInput> | null
    transactions?: TransactionListRelationFilter
    history?: OrderHistoryListRelationFilter
  }, "id" | "trackingNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    originAddress?: SortOrder
    destinationAddress?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    volumetricWeight?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    actualDelivery?: SortOrderInput | SortOrder
    originDockId?: SortOrderInput | SortOrder
    destinationDockId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    trackingNumber?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    amount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumOrderPriorityWithAggregatesFilter<"Order"> | $Enums.OrderPriority
    originAddress?: StringWithAggregatesFilter<"Order"> | string
    destinationAddress?: StringWithAggregatesFilter<"Order"> | string
    recipientName?: StringWithAggregatesFilter<"Order"> | string
    recipientPhone?: StringWithAggregatesFilter<"Order"> | string
    weightKg?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    dimensions?: StringNullableWithAggregatesFilter<"Order"> | string | null
    estimatedDelivery?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    actualDelivery?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    originDockId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    destinationDockId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type ShippingDockWhereInput = {
    AND?: ShippingDockWhereInput | ShippingDockWhereInput[]
    OR?: ShippingDockWhereInput[]
    NOT?: ShippingDockWhereInput | ShippingDockWhereInput[]
    id?: StringFilter<"ShippingDock"> | string
    name?: StringFilter<"ShippingDock"> | string
    code?: StringFilter<"ShippingDock"> | string
    status?: EnumDockStatusFilter<"ShippingDock"> | $Enums.DockStatus
    location?: StringFilter<"ShippingDock"> | string
    address?: StringNullableFilter<"ShippingDock"> | string | null
    capacity?: IntFilter<"ShippingDock"> | number
    description?: StringNullableFilter<"ShippingDock"> | string | null
    managerId?: StringNullableFilter<"ShippingDock"> | string | null
    createdAt?: DateTimeFilter<"ShippingDock"> | Date | string
    updatedAt?: DateTimeFilter<"ShippingDock"> | Date | string
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    transactions?: TransactionListRelationFilter
    originOrders?: OrderListRelationFilter
    destinationOrders?: OrderListRelationFilter
  }

  export type ShippingDockOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    manager?: UserOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    originOrders?: OrderOrderByRelationAggregateInput
    destinationOrders?: OrderOrderByRelationAggregateInput
  }

  export type ShippingDockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ShippingDockWhereInput | ShippingDockWhereInput[]
    OR?: ShippingDockWhereInput[]
    NOT?: ShippingDockWhereInput | ShippingDockWhereInput[]
    name?: StringFilter<"ShippingDock"> | string
    status?: EnumDockStatusFilter<"ShippingDock"> | $Enums.DockStatus
    location?: StringFilter<"ShippingDock"> | string
    address?: StringNullableFilter<"ShippingDock"> | string | null
    capacity?: IntFilter<"ShippingDock"> | number
    description?: StringNullableFilter<"ShippingDock"> | string | null
    managerId?: StringNullableFilter<"ShippingDock"> | string | null
    createdAt?: DateTimeFilter<"ShippingDock"> | Date | string
    updatedAt?: DateTimeFilter<"ShippingDock"> | Date | string
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    transactions?: TransactionListRelationFilter
    originOrders?: OrderListRelationFilter
    destinationOrders?: OrderListRelationFilter
  }, "id" | "code">

  export type ShippingDockOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    location?: SortOrder
    address?: SortOrderInput | SortOrder
    capacity?: SortOrder
    description?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShippingDockCountOrderByAggregateInput
    _avg?: ShippingDockAvgOrderByAggregateInput
    _max?: ShippingDockMaxOrderByAggregateInput
    _min?: ShippingDockMinOrderByAggregateInput
    _sum?: ShippingDockSumOrderByAggregateInput
  }

  export type ShippingDockScalarWhereWithAggregatesInput = {
    AND?: ShippingDockScalarWhereWithAggregatesInput | ShippingDockScalarWhereWithAggregatesInput[]
    OR?: ShippingDockScalarWhereWithAggregatesInput[]
    NOT?: ShippingDockScalarWhereWithAggregatesInput | ShippingDockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShippingDock"> | string
    name?: StringWithAggregatesFilter<"ShippingDock"> | string
    code?: StringWithAggregatesFilter<"ShippingDock"> | string
    status?: EnumDockStatusWithAggregatesFilter<"ShippingDock"> | $Enums.DockStatus
    location?: StringWithAggregatesFilter<"ShippingDock"> | string
    address?: StringNullableWithAggregatesFilter<"ShippingDock"> | string | null
    capacity?: IntWithAggregatesFilter<"ShippingDock"> | number
    description?: StringNullableWithAggregatesFilter<"ShippingDock"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"ShippingDock"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShippingDock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShippingDock"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    reference?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    orderId?: StringFilter<"Transaction"> | string
    shippingDockId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
    notes?: StringNullableFilter<"Transaction"> | string | null
    metadata?: JsonNullableFilter<"Transaction">
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    shippingDock?: XOR<ShippingDockScalarRelationFilter, ShippingDockWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    shippingDockId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    shippingDock?: ShippingDockOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    orderId?: StringFilter<"Transaction"> | string
    shippingDockId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
    notes?: StringNullableFilter<"Transaction"> | string | null
    metadata?: JsonNullableFilter<"Transaction">
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    shippingDock?: XOR<ShippingDockScalarRelationFilter, ShippingDockWhereInput>
  }, "id" | "reference">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    shippingDockId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    reference?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    orderId?: StringWithAggregatesFilter<"Transaction"> | string
    shippingDockId?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Transaction"> | $Enums.PaymentMethod
    notes?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Transaction">
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    statusCode?: IntNullableFilter<"ActivityLog"> | number | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    statusCode?: IntNullableFilter<"ActivityLog"> | number | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    statusCode?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entity?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    statusCode?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserTokenWhereInput = {
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    id?: StringFilter<"UserToken"> | string
    token?: StringFilter<"UserToken"> | string
    userId?: StringFilter<"UserToken"> | string
    type?: StringFilter<"UserToken"> | string
    expiresAt?: DateTimeFilter<"UserToken"> | Date | string
    createdAt?: DateTimeFilter<"UserToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    userId?: StringFilter<"UserToken"> | string
    type?: StringFilter<"UserToken"> | string
    expiresAt?: DateTimeFilter<"UserToken"> | Date | string
    createdAt?: DateTimeFilter<"UserToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type UserTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserTokenCountOrderByAggregateInput
    _max?: UserTokenMaxOrderByAggregateInput
    _min?: UserTokenMinOrderByAggregateInput
  }

  export type UserTokenScalarWhereWithAggregatesInput = {
    AND?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    OR?: UserTokenScalarWhereWithAggregatesInput[]
    NOT?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserToken"> | string
    token?: StringWithAggregatesFilter<"UserToken"> | string
    userId?: StringWithAggregatesFilter<"UserToken"> | string
    type?: StringWithAggregatesFilter<"UserToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"UserToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserToken"> | Date | string
  }

  export type LoginHistoryWhereInput = {
    AND?: LoginHistoryWhereInput | LoginHistoryWhereInput[]
    OR?: LoginHistoryWhereInput[]
    NOT?: LoginHistoryWhereInput | LoginHistoryWhereInput[]
    id?: StringFilter<"LoginHistory"> | string
    userId?: StringFilter<"LoginHistory"> | string
    ipAddress?: StringNullableFilter<"LoginHistory"> | string | null
    userAgent?: StringNullableFilter<"LoginHistory"> | string | null
    isSuccessful?: BoolFilter<"LoginHistory"> | boolean
    errorMessage?: StringNullableFilter<"LoginHistory"> | string | null
    createdAt?: DateTimeFilter<"LoginHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LoginHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isSuccessful?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LoginHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoginHistoryWhereInput | LoginHistoryWhereInput[]
    OR?: LoginHistoryWhereInput[]
    NOT?: LoginHistoryWhereInput | LoginHistoryWhereInput[]
    userId?: StringFilter<"LoginHistory"> | string
    ipAddress?: StringNullableFilter<"LoginHistory"> | string | null
    userAgent?: StringNullableFilter<"LoginHistory"> | string | null
    isSuccessful?: BoolFilter<"LoginHistory"> | boolean
    errorMessage?: StringNullableFilter<"LoginHistory"> | string | null
    createdAt?: DateTimeFilter<"LoginHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LoginHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    isSuccessful?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LoginHistoryCountOrderByAggregateInput
    _max?: LoginHistoryMaxOrderByAggregateInput
    _min?: LoginHistoryMinOrderByAggregateInput
  }

  export type LoginHistoryScalarWhereWithAggregatesInput = {
    AND?: LoginHistoryScalarWhereWithAggregatesInput | LoginHistoryScalarWhereWithAggregatesInput[]
    OR?: LoginHistoryScalarWhereWithAggregatesInput[]
    NOT?: LoginHistoryScalarWhereWithAggregatesInput | LoginHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoginHistory"> | string
    userId?: StringWithAggregatesFilter<"LoginHistory"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"LoginHistory"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"LoginHistory"> | string | null
    isSuccessful?: BoolWithAggregatesFilter<"LoginHistory"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"LoginHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LoginHistory"> | Date | string
  }

  export type OrderHistoryWhereInput = {
    AND?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OR?: OrderHistoryWhereInput[]
    NOT?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    id?: StringFilter<"OrderHistory"> | string
    orderId?: StringFilter<"OrderHistory"> | string
    status?: EnumOrderStatusFilter<"OrderHistory"> | $Enums.OrderStatus
    notes?: StringNullableFilter<"OrderHistory"> | string | null
    actorId?: StringNullableFilter<"OrderHistory"> | string | null
    createdAt?: DateTimeFilter<"OrderHistory"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type OrderHistoryOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type OrderHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    OR?: OrderHistoryWhereInput[]
    NOT?: OrderHistoryWhereInput | OrderHistoryWhereInput[]
    orderId?: StringFilter<"OrderHistory"> | string
    status?: EnumOrderStatusFilter<"OrderHistory"> | $Enums.OrderStatus
    notes?: StringNullableFilter<"OrderHistory"> | string | null
    actorId?: StringNullableFilter<"OrderHistory"> | string | null
    createdAt?: DateTimeFilter<"OrderHistory"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type OrderHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    actorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderHistoryCountOrderByAggregateInput
    _max?: OrderHistoryMaxOrderByAggregateInput
    _min?: OrderHistoryMinOrderByAggregateInput
  }

  export type OrderHistoryScalarWhereWithAggregatesInput = {
    AND?: OrderHistoryScalarWhereWithAggregatesInput | OrderHistoryScalarWhereWithAggregatesInput[]
    OR?: OrderHistoryScalarWhereWithAggregatesInput[]
    NOT?: OrderHistoryScalarWhereWithAggregatesInput | OrderHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderHistory"> | string
    orderId?: StringWithAggregatesFilter<"OrderHistory"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"OrderHistory"> | $Enums.OrderStatus
    notes?: StringNullableWithAggregatesFilter<"OrderHistory"> | string | null
    actorId?: StringNullableWithAggregatesFilter<"OrderHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    originDock?: ShippingDockCreateNestedOneWithoutOriginOrdersInput
    destinationDock?: ShippingDockCreateNestedOneWithoutDestinationOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
    history?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
    history?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    originDock?: ShippingDockUpdateOneWithoutOriginOrdersNestedInput
    destinationDock?: ShippingDockUpdateOneWithoutDestinationOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingDockCreateInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedDocksInput
    transactions?: TransactionCreateNestedManyWithoutShippingDockInput
    originOrders?: OrderCreateNestedManyWithoutOriginDockInput
    destinationOrders?: OrderCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutShippingDockInput
    originOrders?: OrderUncheckedCreateNestedManyWithoutOriginDockInput
    destinationOrders?: OrderUncheckedCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedDocksNestedInput
    transactions?: TransactionUpdateManyWithoutShippingDockNestedInput
    originOrders?: OrderUpdateManyWithoutOriginDockNestedInput
    destinationOrders?: OrderUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutShippingDockNestedInput
    originOrders?: OrderUncheckedUpdateManyWithoutOriginDockNestedInput
    destinationOrders?: OrderUncheckedUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockCreateManyInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingDockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingDockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    order: OrderCreateNestedOneWithoutTransactionsInput
    shippingDock: ShippingDockCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    reference: string
    userId: string
    orderId: string
    shippingDockId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    order?: OrderUpdateOneRequiredWithoutTransactionsNestedInput
    shippingDock?: ShippingDockUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    shippingDockId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    reference: string
    userId: string
    orderId: string
    shippingDockId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    shippingDockId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    statusCode?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    statusCode?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    statusCode?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenCreateInput = {
    id?: string
    token: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserTokensInput
  }

  export type UserTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTokensNestedInput
  }

  export type UserTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginHistoryCreateInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    isSuccessful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLoginHistoriesInput
  }

  export type LoginHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    ipAddress?: string | null
    userAgent?: string | null
    isSuccessful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type LoginHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoginHistoriesNestedInput
  }

  export type LoginHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginHistoryCreateManyInput = {
    id?: string
    userId: string
    ipAddress?: string | null
    userAgent?: string | null
    isSuccessful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type LoginHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryCreateInput = {
    id?: string
    status: $Enums.OrderStatus
    notes?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutHistoryInput
    actor?: UserCreateNestedOneWithoutOrderHistoryInput
  }

  export type OrderHistoryUncheckedCreateInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    notes?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type OrderHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutHistoryNestedInput
    actor?: UserUpdateOneWithoutOrderHistoryNestedInput
  }

  export type OrderHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryCreateManyInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    notes?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type OrderHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ShippingDockListRelationFilter = {
    every?: ShippingDockWhereInput
    some?: ShippingDockWhereInput
    none?: ShippingDockWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type UserTokenListRelationFilter = {
    every?: UserTokenWhereInput
    some?: UserTokenWhereInput
    none?: UserTokenWhereInput
  }

  export type LoginHistoryListRelationFilter = {
    every?: LoginHistoryWhereInput
    some?: LoginHistoryWhereInput
    none?: LoginHistoryWhereInput
  }

  export type OrderHistoryListRelationFilter = {
    every?: OrderHistoryWhereInput
    some?: OrderHistoryWhereInput
    none?: OrderHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShippingDockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    profileImageUrl?: SortOrder
    twoFactorSecret?: SortOrder
    isTwoFactorEnabled?: SortOrder
    lastLoginAt?: SortOrder
    currentLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    profileImageUrl?: SortOrder
    twoFactorSecret?: SortOrder
    isTwoFactorEnabled?: SortOrder
    lastLoginAt?: SortOrder
    currentLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    isEmailVerified?: SortOrder
    profileImageUrl?: SortOrder
    twoFactorSecret?: SortOrder
    isTwoFactorEnabled?: SortOrder
    lastLoginAt?: SortOrder
    currentLoginIp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumOrderPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderPriorityFilter<$PrismaModel> | $Enums.OrderPriority
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShippingDockNullableScalarRelationFilter = {
    is?: ShippingDockWhereInput | null
    isNot?: ShippingDockWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    originAddress?: SortOrder
    destinationAddress?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    weightKg?: SortOrder
    volumetricWeight?: SortOrder
    dimensions?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    originDockId?: SortOrder
    destinationDockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    weightKg?: SortOrder
    volumetricWeight?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    originAddress?: SortOrder
    destinationAddress?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    weightKg?: SortOrder
    volumetricWeight?: SortOrder
    dimensions?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    originDockId?: SortOrder
    destinationDockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    trackingNumber?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    originAddress?: SortOrder
    destinationAddress?: SortOrder
    recipientName?: SortOrder
    recipientPhone?: SortOrder
    weightKg?: SortOrder
    volumetricWeight?: SortOrder
    dimensions?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    originDockId?: SortOrder
    destinationDockId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    amount?: SortOrder
    taxAmount?: SortOrder
    shippingFee?: SortOrder
    totalAmount?: SortOrder
    weightKg?: SortOrder
    volumetricWeight?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumOrderPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderPriorityWithAggregatesFilter<$PrismaModel> | $Enums.OrderPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderPriorityFilter<$PrismaModel>
    _max?: NestedEnumOrderPriorityFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumDockStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DockStatus | EnumDockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDockStatusFilter<$PrismaModel> | $Enums.DockStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ShippingDockCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingDockAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type ShippingDockMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingDockMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    status?: SortOrder
    location?: SortOrder
    address?: SortOrder
    capacity?: SortOrder
    description?: SortOrder
    managerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShippingDockSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type EnumDockStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DockStatus | EnumDockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDockStatusWithAggregatesFilter<$PrismaModel> | $Enums.DockStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDockStatusFilter<$PrismaModel>
    _max?: NestedEnumDockStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ShippingDockScalarRelationFilter = {
    is?: ShippingDockWhereInput
    isNot?: ShippingDockWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    shippingDockId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    shippingDockId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    userId?: SortOrder
    orderId?: SortOrder
    shippingDockId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    statusCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isSuccessful?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isSuccessful?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    isSuccessful?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    actorId?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ShippingDockCreateNestedManyWithoutManagerInput = {
    create?: XOR<ShippingDockCreateWithoutManagerInput, ShippingDockUncheckedCreateWithoutManagerInput> | ShippingDockCreateWithoutManagerInput[] | ShippingDockUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ShippingDockCreateOrConnectWithoutManagerInput | ShippingDockCreateOrConnectWithoutManagerInput[]
    createMany?: ShippingDockCreateManyManagerInputEnvelope
    connect?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type UserTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type LoginHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginHistoryCreateWithoutUserInput, LoginHistoryUncheckedCreateWithoutUserInput> | LoginHistoryCreateWithoutUserInput[] | LoginHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginHistoryCreateOrConnectWithoutUserInput | LoginHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LoginHistoryCreateManyUserInputEnvelope
    connect?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
  }

  export type OrderHistoryCreateNestedManyWithoutActorInput = {
    create?: XOR<OrderHistoryCreateWithoutActorInput, OrderHistoryUncheckedCreateWithoutActorInput> | OrderHistoryCreateWithoutActorInput[] | OrderHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutActorInput | OrderHistoryCreateOrConnectWithoutActorInput[]
    createMany?: OrderHistoryCreateManyActorInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ShippingDockUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ShippingDockCreateWithoutManagerInput, ShippingDockUncheckedCreateWithoutManagerInput> | ShippingDockCreateWithoutManagerInput[] | ShippingDockUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ShippingDockCreateOrConnectWithoutManagerInput | ShippingDockCreateOrConnectWithoutManagerInput[]
    createMany?: ShippingDockCreateManyManagerInputEnvelope
    connect?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type UserTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type LoginHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginHistoryCreateWithoutUserInput, LoginHistoryUncheckedCreateWithoutUserInput> | LoginHistoryCreateWithoutUserInput[] | LoginHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginHistoryCreateOrConnectWithoutUserInput | LoginHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LoginHistoryCreateManyUserInputEnvelope
    connect?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
  }

  export type OrderHistoryUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<OrderHistoryCreateWithoutActorInput, OrderHistoryUncheckedCreateWithoutActorInput> | OrderHistoryCreateWithoutActorInput[] | OrderHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutActorInput | OrderHistoryCreateOrConnectWithoutActorInput[]
    createMany?: OrderHistoryCreateManyActorInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ShippingDockUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ShippingDockCreateWithoutManagerInput, ShippingDockUncheckedCreateWithoutManagerInput> | ShippingDockCreateWithoutManagerInput[] | ShippingDockUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ShippingDockCreateOrConnectWithoutManagerInput | ShippingDockCreateOrConnectWithoutManagerInput[]
    upsert?: ShippingDockUpsertWithWhereUniqueWithoutManagerInput | ShippingDockUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ShippingDockCreateManyManagerInputEnvelope
    set?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    disconnect?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    delete?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    connect?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    update?: ShippingDockUpdateWithWhereUniqueWithoutManagerInput | ShippingDockUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ShippingDockUpdateManyWithWhereWithoutManagerInput | ShippingDockUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ShippingDockScalarWhereInput | ShippingDockScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type LoginHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginHistoryCreateWithoutUserInput, LoginHistoryUncheckedCreateWithoutUserInput> | LoginHistoryCreateWithoutUserInput[] | LoginHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginHistoryCreateOrConnectWithoutUserInput | LoginHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LoginHistoryUpsertWithWhereUniqueWithoutUserInput | LoginHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginHistoryCreateManyUserInputEnvelope
    set?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    disconnect?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    delete?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    connect?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    update?: LoginHistoryUpdateWithWhereUniqueWithoutUserInput | LoginHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginHistoryUpdateManyWithWhereWithoutUserInput | LoginHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginHistoryScalarWhereInput | LoginHistoryScalarWhereInput[]
  }

  export type OrderHistoryUpdateManyWithoutActorNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutActorInput, OrderHistoryUncheckedCreateWithoutActorInput> | OrderHistoryCreateWithoutActorInput[] | OrderHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutActorInput | OrderHistoryCreateOrConnectWithoutActorInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutActorInput | OrderHistoryUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: OrderHistoryCreateManyActorInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutActorInput | OrderHistoryUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutActorInput | OrderHistoryUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ShippingDockUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ShippingDockCreateWithoutManagerInput, ShippingDockUncheckedCreateWithoutManagerInput> | ShippingDockCreateWithoutManagerInput[] | ShippingDockUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ShippingDockCreateOrConnectWithoutManagerInput | ShippingDockCreateOrConnectWithoutManagerInput[]
    upsert?: ShippingDockUpsertWithWhereUniqueWithoutManagerInput | ShippingDockUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ShippingDockCreateManyManagerInputEnvelope
    set?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    disconnect?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    delete?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    connect?: ShippingDockWhereUniqueInput | ShippingDockWhereUniqueInput[]
    update?: ShippingDockUpdateWithWhereUniqueWithoutManagerInput | ShippingDockUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ShippingDockUpdateManyWithWhereWithoutManagerInput | ShippingDockUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ShippingDockScalarWhereInput | ShippingDockScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type LoginHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginHistoryCreateWithoutUserInput, LoginHistoryUncheckedCreateWithoutUserInput> | LoginHistoryCreateWithoutUserInput[] | LoginHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginHistoryCreateOrConnectWithoutUserInput | LoginHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LoginHistoryUpsertWithWhereUniqueWithoutUserInput | LoginHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginHistoryCreateManyUserInputEnvelope
    set?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    disconnect?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    delete?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    connect?: LoginHistoryWhereUniqueInput | LoginHistoryWhereUniqueInput[]
    update?: LoginHistoryUpdateWithWhereUniqueWithoutUserInput | LoginHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginHistoryUpdateManyWithWhereWithoutUserInput | LoginHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginHistoryScalarWhereInput | LoginHistoryScalarWhereInput[]
  }

  export type OrderHistoryUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutActorInput, OrderHistoryUncheckedCreateWithoutActorInput> | OrderHistoryCreateWithoutActorInput[] | OrderHistoryUncheckedCreateWithoutActorInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutActorInput | OrderHistoryCreateOrConnectWithoutActorInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutActorInput | OrderHistoryUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: OrderHistoryCreateManyActorInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutActorInput | OrderHistoryUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutActorInput | OrderHistoryUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ShippingDockCreateNestedOneWithoutOriginOrdersInput = {
    create?: XOR<ShippingDockCreateWithoutOriginOrdersInput, ShippingDockUncheckedCreateWithoutOriginOrdersInput>
    connectOrCreate?: ShippingDockCreateOrConnectWithoutOriginOrdersInput
    connect?: ShippingDockWhereUniqueInput
  }

  export type ShippingDockCreateNestedOneWithoutDestinationOrdersInput = {
    create?: XOR<ShippingDockCreateWithoutDestinationOrdersInput, ShippingDockUncheckedCreateWithoutDestinationOrdersInput>
    connectOrCreate?: ShippingDockCreateOrConnectWithoutDestinationOrdersInput
    connect?: ShippingDockWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OrderHistoryCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OrderHistoryUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumOrderPriorityFieldUpdateOperationsInput = {
    set?: $Enums.OrderPriority
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ShippingDockUpdateOneWithoutOriginOrdersNestedInput = {
    create?: XOR<ShippingDockCreateWithoutOriginOrdersInput, ShippingDockUncheckedCreateWithoutOriginOrdersInput>
    connectOrCreate?: ShippingDockCreateOrConnectWithoutOriginOrdersInput
    upsert?: ShippingDockUpsertWithoutOriginOrdersInput
    disconnect?: ShippingDockWhereInput | boolean
    delete?: ShippingDockWhereInput | boolean
    connect?: ShippingDockWhereUniqueInput
    update?: XOR<XOR<ShippingDockUpdateToOneWithWhereWithoutOriginOrdersInput, ShippingDockUpdateWithoutOriginOrdersInput>, ShippingDockUncheckedUpdateWithoutOriginOrdersInput>
  }

  export type ShippingDockUpdateOneWithoutDestinationOrdersNestedInput = {
    create?: XOR<ShippingDockCreateWithoutDestinationOrdersInput, ShippingDockUncheckedCreateWithoutDestinationOrdersInput>
    connectOrCreate?: ShippingDockCreateOrConnectWithoutDestinationOrdersInput
    upsert?: ShippingDockUpsertWithoutDestinationOrdersInput
    disconnect?: ShippingDockWhereInput | boolean
    delete?: ShippingDockWhereInput | boolean
    connect?: ShippingDockWhereUniqueInput
    update?: XOR<XOR<ShippingDockUpdateToOneWithWhereWithoutDestinationOrdersInput, ShippingDockUpdateWithoutDestinationOrdersInput>, ShippingDockUncheckedUpdateWithoutDestinationOrdersInput>
  }

  export type TransactionUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrderInput | TransactionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrderInput | TransactionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrderInput | TransactionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OrderHistoryUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutOrderInput | OrderHistoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutOrderInput | OrderHistoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutOrderInput | OrderHistoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput> | TransactionCreateWithoutOrderInput[] | TransactionUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutOrderInput | TransactionCreateOrConnectWithoutOrderInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutOrderInput | TransactionUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TransactionCreateManyOrderInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutOrderInput | TransactionUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutOrderInput | TransactionUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput> | OrderHistoryCreateWithoutOrderInput[] | OrderHistoryUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderHistoryCreateOrConnectWithoutOrderInput | OrderHistoryCreateOrConnectWithoutOrderInput[]
    upsert?: OrderHistoryUpsertWithWhereUniqueWithoutOrderInput | OrderHistoryUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderHistoryCreateManyOrderInputEnvelope
    set?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    disconnect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    delete?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    connect?: OrderHistoryWhereUniqueInput | OrderHistoryWhereUniqueInput[]
    update?: OrderHistoryUpdateWithWhereUniqueWithoutOrderInput | OrderHistoryUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderHistoryUpdateManyWithWhereWithoutOrderInput | OrderHistoryUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutManagedDocksInput = {
    create?: XOR<UserCreateWithoutManagedDocksInput, UserUncheckedCreateWithoutManagedDocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedDocksInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutShippingDockInput = {
    create?: XOR<TransactionCreateWithoutShippingDockInput, TransactionUncheckedCreateWithoutShippingDockInput> | TransactionCreateWithoutShippingDockInput[] | TransactionUncheckedCreateWithoutShippingDockInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShippingDockInput | TransactionCreateOrConnectWithoutShippingDockInput[]
    createMany?: TransactionCreateManyShippingDockInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutOriginDockInput = {
    create?: XOR<OrderCreateWithoutOriginDockInput, OrderUncheckedCreateWithoutOriginDockInput> | OrderCreateWithoutOriginDockInput[] | OrderUncheckedCreateWithoutOriginDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOriginDockInput | OrderCreateOrConnectWithoutOriginDockInput[]
    createMany?: OrderCreateManyOriginDockInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutDestinationDockInput = {
    create?: XOR<OrderCreateWithoutDestinationDockInput, OrderUncheckedCreateWithoutDestinationDockInput> | OrderCreateWithoutDestinationDockInput[] | OrderUncheckedCreateWithoutDestinationDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDestinationDockInput | OrderCreateOrConnectWithoutDestinationDockInput[]
    createMany?: OrderCreateManyDestinationDockInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutShippingDockInput = {
    create?: XOR<TransactionCreateWithoutShippingDockInput, TransactionUncheckedCreateWithoutShippingDockInput> | TransactionCreateWithoutShippingDockInput[] | TransactionUncheckedCreateWithoutShippingDockInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShippingDockInput | TransactionCreateOrConnectWithoutShippingDockInput[]
    createMany?: TransactionCreateManyShippingDockInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutOriginDockInput = {
    create?: XOR<OrderCreateWithoutOriginDockInput, OrderUncheckedCreateWithoutOriginDockInput> | OrderCreateWithoutOriginDockInput[] | OrderUncheckedCreateWithoutOriginDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOriginDockInput | OrderCreateOrConnectWithoutOriginDockInput[]
    createMany?: OrderCreateManyOriginDockInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDestinationDockInput = {
    create?: XOR<OrderCreateWithoutDestinationDockInput, OrderUncheckedCreateWithoutDestinationDockInput> | OrderCreateWithoutDestinationDockInput[] | OrderUncheckedCreateWithoutDestinationDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDestinationDockInput | OrderCreateOrConnectWithoutDestinationDockInput[]
    createMany?: OrderCreateManyDestinationDockInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EnumDockStatusFieldUpdateOperationsInput = {
    set?: $Enums.DockStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutManagedDocksNestedInput = {
    create?: XOR<UserCreateWithoutManagedDocksInput, UserUncheckedCreateWithoutManagedDocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedDocksInput
    upsert?: UserUpsertWithoutManagedDocksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedDocksInput, UserUpdateWithoutManagedDocksInput>, UserUncheckedUpdateWithoutManagedDocksInput>
  }

  export type TransactionUpdateManyWithoutShippingDockNestedInput = {
    create?: XOR<TransactionCreateWithoutShippingDockInput, TransactionUncheckedCreateWithoutShippingDockInput> | TransactionCreateWithoutShippingDockInput[] | TransactionUncheckedCreateWithoutShippingDockInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShippingDockInput | TransactionCreateOrConnectWithoutShippingDockInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutShippingDockInput | TransactionUpsertWithWhereUniqueWithoutShippingDockInput[]
    createMany?: TransactionCreateManyShippingDockInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutShippingDockInput | TransactionUpdateWithWhereUniqueWithoutShippingDockInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutShippingDockInput | TransactionUpdateManyWithWhereWithoutShippingDockInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutOriginDockNestedInput = {
    create?: XOR<OrderCreateWithoutOriginDockInput, OrderUncheckedCreateWithoutOriginDockInput> | OrderCreateWithoutOriginDockInput[] | OrderUncheckedCreateWithoutOriginDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOriginDockInput | OrderCreateOrConnectWithoutOriginDockInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOriginDockInput | OrderUpsertWithWhereUniqueWithoutOriginDockInput[]
    createMany?: OrderCreateManyOriginDockInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOriginDockInput | OrderUpdateWithWhereUniqueWithoutOriginDockInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOriginDockInput | OrderUpdateManyWithWhereWithoutOriginDockInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutDestinationDockNestedInput = {
    create?: XOR<OrderCreateWithoutDestinationDockInput, OrderUncheckedCreateWithoutDestinationDockInput> | OrderCreateWithoutDestinationDockInput[] | OrderUncheckedCreateWithoutDestinationDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDestinationDockInput | OrderCreateOrConnectWithoutDestinationDockInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDestinationDockInput | OrderUpsertWithWhereUniqueWithoutDestinationDockInput[]
    createMany?: OrderCreateManyDestinationDockInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDestinationDockInput | OrderUpdateWithWhereUniqueWithoutDestinationDockInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDestinationDockInput | OrderUpdateManyWithWhereWithoutDestinationDockInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutShippingDockNestedInput = {
    create?: XOR<TransactionCreateWithoutShippingDockInput, TransactionUncheckedCreateWithoutShippingDockInput> | TransactionCreateWithoutShippingDockInput[] | TransactionUncheckedCreateWithoutShippingDockInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutShippingDockInput | TransactionCreateOrConnectWithoutShippingDockInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutShippingDockInput | TransactionUpsertWithWhereUniqueWithoutShippingDockInput[]
    createMany?: TransactionCreateManyShippingDockInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutShippingDockInput | TransactionUpdateWithWhereUniqueWithoutShippingDockInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutShippingDockInput | TransactionUpdateManyWithWhereWithoutShippingDockInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutOriginDockNestedInput = {
    create?: XOR<OrderCreateWithoutOriginDockInput, OrderUncheckedCreateWithoutOriginDockInput> | OrderCreateWithoutOriginDockInput[] | OrderUncheckedCreateWithoutOriginDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutOriginDockInput | OrderCreateOrConnectWithoutOriginDockInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutOriginDockInput | OrderUpsertWithWhereUniqueWithoutOriginDockInput[]
    createMany?: OrderCreateManyOriginDockInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutOriginDockInput | OrderUpdateWithWhereUniqueWithoutOriginDockInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutOriginDockInput | OrderUpdateManyWithWhereWithoutOriginDockInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDestinationDockNestedInput = {
    create?: XOR<OrderCreateWithoutDestinationDockInput, OrderUncheckedCreateWithoutDestinationDockInput> | OrderCreateWithoutDestinationDockInput[] | OrderUncheckedCreateWithoutDestinationDockInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDestinationDockInput | OrderCreateOrConnectWithoutDestinationDockInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDestinationDockInput | OrderUpsertWithWhereUniqueWithoutDestinationDockInput[]
    createMany?: OrderCreateManyDestinationDockInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDestinationDockInput | OrderUpdateWithWhereUniqueWithoutDestinationDockInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDestinationDockInput | OrderUpdateManyWithWhereWithoutDestinationDockInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransactionsInput
    connect?: OrderWhereUniqueInput
  }

  export type ShippingDockCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<ShippingDockCreateWithoutTransactionsInput, ShippingDockUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ShippingDockCreateOrConnectWithoutTransactionsInput
    connect?: ShippingDockWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type OrderUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutTransactionsInput
    upsert?: OrderUpsertWithoutTransactionsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutTransactionsInput, OrderUpdateWithoutTransactionsInput>, OrderUncheckedUpdateWithoutTransactionsInput>
  }

  export type ShippingDockUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<ShippingDockCreateWithoutTransactionsInput, ShippingDockUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: ShippingDockCreateOrConnectWithoutTransactionsInput
    upsert?: ShippingDockUpsertWithoutTransactionsInput
    connect?: ShippingDockWhereUniqueInput
    update?: XOR<XOR<ShippingDockUpdateToOneWithWhereWithoutTransactionsInput, ShippingDockUpdateWithoutTransactionsInput>, ShippingDockUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserCreateNestedOneWithoutUserTokensInput = {
    create?: XOR<UserCreateWithoutUserTokensInput, UserUncheckedCreateWithoutUserTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserTokensNestedInput = {
    create?: XOR<UserCreateWithoutUserTokensInput, UserUncheckedCreateWithoutUserTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTokensInput
    upsert?: UserUpsertWithoutUserTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTokensInput, UserUpdateWithoutUserTokensInput>, UserUncheckedUpdateWithoutUserTokensInput>
  }

  export type UserCreateNestedOneWithoutLoginHistoriesInput = {
    create?: XOR<UserCreateWithoutLoginHistoriesInput, UserUncheckedCreateWithoutLoginHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLoginHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutLoginHistoriesInput, UserUncheckedCreateWithoutLoginHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginHistoriesInput
    upsert?: UserUpsertWithoutLoginHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoginHistoriesInput, UserUpdateWithoutLoginHistoriesInput>, UserUncheckedUpdateWithoutLoginHistoriesInput>
  }

  export type OrderCreateNestedOneWithoutHistoryInput = {
    create?: XOR<OrderCreateWithoutHistoryInput, OrderUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutHistoryInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrderHistoryInput = {
    create?: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<OrderCreateWithoutHistoryInput, OrderUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutHistoryInput
    upsert?: OrderUpsertWithoutHistoryInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutHistoryInput, OrderUpdateWithoutHistoryInput>, OrderUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneWithoutOrderHistoryNestedInput = {
    create?: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderHistoryInput
    upsert?: UserUpsertWithoutOrderHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderHistoryInput, UserUpdateWithoutOrderHistoryInput>, UserUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderPriorityFilter<$PrismaModel> | $Enums.OrderPriority
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumOrderPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderPriority | EnumOrderPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderPriority[] | ListEnumOrderPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderPriorityWithAggregatesFilter<$PrismaModel> | $Enums.OrderPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderPriorityFilter<$PrismaModel>
    _max?: NestedEnumOrderPriorityFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumDockStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DockStatus | EnumDockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDockStatusFilter<$PrismaModel> | $Enums.DockStatus
  }

  export type NestedEnumDockStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DockStatus | EnumDockStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DockStatus[] | ListEnumDockStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDockStatusWithAggregatesFilter<$PrismaModel> | $Enums.DockStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDockStatusFilter<$PrismaModel>
    _max?: NestedEnumDockStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originDock?: ShippingDockCreateNestedOneWithoutOriginOrdersInput
    destinationDock?: ShippingDockCreateNestedOneWithoutDestinationOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
    history?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
    history?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutTransactionsInput
    shippingDock: ShippingDockCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    reference: string
    orderId: string
    shippingDockId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShippingDockCreateWithoutManagerInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutShippingDockInput
    originOrders?: OrderCreateNestedManyWithoutOriginDockInput
    destinationOrders?: OrderCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockUncheckedCreateWithoutManagerInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutShippingDockInput
    originOrders?: OrderUncheckedCreateNestedManyWithoutOriginDockInput
    destinationOrders?: OrderUncheckedCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockCreateOrConnectWithoutManagerInput = {
    where: ShippingDockWhereUniqueInput
    create: XOR<ShippingDockCreateWithoutManagerInput, ShippingDockUncheckedCreateWithoutManagerInput>
  }

  export type ShippingDockCreateManyManagerInputEnvelope = {
    data: ShippingDockCreateManyManagerInput | ShippingDockCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    statusCode?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    statusCode?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTokenCreateWithoutUserInput = {
    id?: string
    token: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserTokenCreateOrConnectWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateManyUserInputEnvelope = {
    data: UserTokenCreateManyUserInput | UserTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LoginHistoryCreateWithoutUserInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    isSuccessful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type LoginHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    isSuccessful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type LoginHistoryCreateOrConnectWithoutUserInput = {
    where: LoginHistoryWhereUniqueInput
    create: XOR<LoginHistoryCreateWithoutUserInput, LoginHistoryUncheckedCreateWithoutUserInput>
  }

  export type LoginHistoryCreateManyUserInputEnvelope = {
    data: LoginHistoryCreateManyUserInput | LoginHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderHistoryCreateWithoutActorInput = {
    id?: string
    status: $Enums.OrderStatus
    notes?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutHistoryInput
  }

  export type OrderHistoryUncheckedCreateWithoutActorInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrderHistoryCreateOrConnectWithoutActorInput = {
    where: OrderHistoryWhereUniqueInput
    create: XOR<OrderHistoryCreateWithoutActorInput, OrderHistoryUncheckedCreateWithoutActorInput>
  }

  export type OrderHistoryCreateManyActorInputEnvelope = {
    data: OrderHistoryCreateManyActorInput | OrderHistoryCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    trackingNumber?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    notes?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    priority?: EnumOrderPriorityFilter<"Order"> | $Enums.OrderPriority
    originAddress?: StringFilter<"Order"> | string
    destinationAddress?: StringFilter<"Order"> | string
    recipientName?: StringFilter<"Order"> | string
    recipientPhone?: StringFilter<"Order"> | string
    weightKg?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    dimensions?: StringNullableFilter<"Order"> | string | null
    estimatedDelivery?: DateTimeNullableFilter<"Order"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Order"> | Date | string | null
    originDockId?: StringNullableFilter<"Order"> | string | null
    destinationDockId?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    reference?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    orderId?: StringFilter<"Transaction"> | string
    shippingDockId?: StringFilter<"Transaction"> | string
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Transaction"> | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFilter<"Transaction"> | $Enums.PaymentMethod
    notes?: StringNullableFilter<"Transaction"> | string | null
    metadata?: JsonNullableFilter<"Transaction">
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ShippingDockUpsertWithWhereUniqueWithoutManagerInput = {
    where: ShippingDockWhereUniqueInput
    update: XOR<ShippingDockUpdateWithoutManagerInput, ShippingDockUncheckedUpdateWithoutManagerInput>
    create: XOR<ShippingDockCreateWithoutManagerInput, ShippingDockUncheckedCreateWithoutManagerInput>
  }

  export type ShippingDockUpdateWithWhereUniqueWithoutManagerInput = {
    where: ShippingDockWhereUniqueInput
    data: XOR<ShippingDockUpdateWithoutManagerInput, ShippingDockUncheckedUpdateWithoutManagerInput>
  }

  export type ShippingDockUpdateManyWithWhereWithoutManagerInput = {
    where: ShippingDockScalarWhereInput
    data: XOR<ShippingDockUpdateManyMutationInput, ShippingDockUncheckedUpdateManyWithoutManagerInput>
  }

  export type ShippingDockScalarWhereInput = {
    AND?: ShippingDockScalarWhereInput | ShippingDockScalarWhereInput[]
    OR?: ShippingDockScalarWhereInput[]
    NOT?: ShippingDockScalarWhereInput | ShippingDockScalarWhereInput[]
    id?: StringFilter<"ShippingDock"> | string
    name?: StringFilter<"ShippingDock"> | string
    code?: StringFilter<"ShippingDock"> | string
    status?: EnumDockStatusFilter<"ShippingDock"> | $Enums.DockStatus
    location?: StringFilter<"ShippingDock"> | string
    address?: StringNullableFilter<"ShippingDock"> | string | null
    capacity?: IntFilter<"ShippingDock"> | number
    description?: StringNullableFilter<"ShippingDock"> | string | null
    managerId?: StringNullableFilter<"ShippingDock"> | string | null
    createdAt?: DateTimeFilter<"ShippingDock"> | Date | string
    updatedAt?: DateTimeFilter<"ShippingDock"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    userId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    statusCode?: IntNullableFilter<"ActivityLog"> | number | null
    metadata?: JsonNullableFilter<"ActivityLog">
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UserTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    update: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    data: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithWhereWithoutUserInput = {
    where: UserTokenScalarWhereInput
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTokenScalarWhereInput = {
    AND?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    OR?: UserTokenScalarWhereInput[]
    NOT?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    id?: StringFilter<"UserToken"> | string
    token?: StringFilter<"UserToken"> | string
    userId?: StringFilter<"UserToken"> | string
    type?: StringFilter<"UserToken"> | string
    expiresAt?: DateTimeFilter<"UserToken"> | Date | string
    createdAt?: DateTimeFilter<"UserToken"> | Date | string
  }

  export type LoginHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginHistoryWhereUniqueInput
    update: XOR<LoginHistoryUpdateWithoutUserInput, LoginHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<LoginHistoryCreateWithoutUserInput, LoginHistoryUncheckedCreateWithoutUserInput>
  }

  export type LoginHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginHistoryWhereUniqueInput
    data: XOR<LoginHistoryUpdateWithoutUserInput, LoginHistoryUncheckedUpdateWithoutUserInput>
  }

  export type LoginHistoryUpdateManyWithWhereWithoutUserInput = {
    where: LoginHistoryScalarWhereInput
    data: XOR<LoginHistoryUpdateManyMutationInput, LoginHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type LoginHistoryScalarWhereInput = {
    AND?: LoginHistoryScalarWhereInput | LoginHistoryScalarWhereInput[]
    OR?: LoginHistoryScalarWhereInput[]
    NOT?: LoginHistoryScalarWhereInput | LoginHistoryScalarWhereInput[]
    id?: StringFilter<"LoginHistory"> | string
    userId?: StringFilter<"LoginHistory"> | string
    ipAddress?: StringNullableFilter<"LoginHistory"> | string | null
    userAgent?: StringNullableFilter<"LoginHistory"> | string | null
    isSuccessful?: BoolFilter<"LoginHistory"> | boolean
    errorMessage?: StringNullableFilter<"LoginHistory"> | string | null
    createdAt?: DateTimeFilter<"LoginHistory"> | Date | string
  }

  export type OrderHistoryUpsertWithWhereUniqueWithoutActorInput = {
    where: OrderHistoryWhereUniqueInput
    update: XOR<OrderHistoryUpdateWithoutActorInput, OrderHistoryUncheckedUpdateWithoutActorInput>
    create: XOR<OrderHistoryCreateWithoutActorInput, OrderHistoryUncheckedCreateWithoutActorInput>
  }

  export type OrderHistoryUpdateWithWhereUniqueWithoutActorInput = {
    where: OrderHistoryWhereUniqueInput
    data: XOR<OrderHistoryUpdateWithoutActorInput, OrderHistoryUncheckedUpdateWithoutActorInput>
  }

  export type OrderHistoryUpdateManyWithWhereWithoutActorInput = {
    where: OrderHistoryScalarWhereInput
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyWithoutActorInput>
  }

  export type OrderHistoryScalarWhereInput = {
    AND?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
    OR?: OrderHistoryScalarWhereInput[]
    NOT?: OrderHistoryScalarWhereInput | OrderHistoryScalarWhereInput[]
    id?: StringFilter<"OrderHistory"> | string
    orderId?: StringFilter<"OrderHistory"> | string
    status?: EnumOrderStatusFilter<"OrderHistory"> | $Enums.OrderStatus
    notes?: StringNullableFilter<"OrderHistory"> | string | null
    actorId?: StringNullableFilter<"OrderHistory"> | string | null
    createdAt?: DateTimeFilter<"OrderHistory"> | Date | string
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ShippingDockCreateWithoutOriginOrdersInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedDocksInput
    transactions?: TransactionCreateNestedManyWithoutShippingDockInput
    destinationOrders?: OrderCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockUncheckedCreateWithoutOriginOrdersInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutShippingDockInput
    destinationOrders?: OrderUncheckedCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockCreateOrConnectWithoutOriginOrdersInput = {
    where: ShippingDockWhereUniqueInput
    create: XOR<ShippingDockCreateWithoutOriginOrdersInput, ShippingDockUncheckedCreateWithoutOriginOrdersInput>
  }

  export type ShippingDockCreateWithoutDestinationOrdersInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedDocksInput
    transactions?: TransactionCreateNestedManyWithoutShippingDockInput
    originOrders?: OrderCreateNestedManyWithoutOriginDockInput
  }

  export type ShippingDockUncheckedCreateWithoutDestinationOrdersInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutShippingDockInput
    originOrders?: OrderUncheckedCreateNestedManyWithoutOriginDockInput
  }

  export type ShippingDockCreateOrConnectWithoutDestinationOrdersInput = {
    where: ShippingDockWhereUniqueInput
    create: XOR<ShippingDockCreateWithoutDestinationOrdersInput, ShippingDockUncheckedCreateWithoutDestinationOrdersInput>
  }

  export type TransactionCreateWithoutOrderInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    shippingDock: ShippingDockCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutOrderInput = {
    id?: string
    reference: string
    userId: string
    shippingDockId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput>
  }

  export type TransactionCreateManyOrderInputEnvelope = {
    data: TransactionCreateManyOrderInput | TransactionCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderHistoryCreateWithoutOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    notes?: string | null
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutOrderHistoryInput
  }

  export type OrderHistoryUncheckedCreateWithoutOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    notes?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type OrderHistoryCreateOrConnectWithoutOrderInput = {
    where: OrderHistoryWhereUniqueInput
    create: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput>
  }

  export type OrderHistoryCreateManyOrderInputEnvelope = {
    data: OrderHistoryCreateManyOrderInput | OrderHistoryCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ShippingDockUpsertWithoutOriginOrdersInput = {
    update: XOR<ShippingDockUpdateWithoutOriginOrdersInput, ShippingDockUncheckedUpdateWithoutOriginOrdersInput>
    create: XOR<ShippingDockCreateWithoutOriginOrdersInput, ShippingDockUncheckedCreateWithoutOriginOrdersInput>
    where?: ShippingDockWhereInput
  }

  export type ShippingDockUpdateToOneWithWhereWithoutOriginOrdersInput = {
    where?: ShippingDockWhereInput
    data: XOR<ShippingDockUpdateWithoutOriginOrdersInput, ShippingDockUncheckedUpdateWithoutOriginOrdersInput>
  }

  export type ShippingDockUpdateWithoutOriginOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedDocksNestedInput
    transactions?: TransactionUpdateManyWithoutShippingDockNestedInput
    destinationOrders?: OrderUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockUncheckedUpdateWithoutOriginOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutShippingDockNestedInput
    destinationOrders?: OrderUncheckedUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockUpsertWithoutDestinationOrdersInput = {
    update: XOR<ShippingDockUpdateWithoutDestinationOrdersInput, ShippingDockUncheckedUpdateWithoutDestinationOrdersInput>
    create: XOR<ShippingDockCreateWithoutDestinationOrdersInput, ShippingDockUncheckedCreateWithoutDestinationOrdersInput>
    where?: ShippingDockWhereInput
  }

  export type ShippingDockUpdateToOneWithWhereWithoutDestinationOrdersInput = {
    where?: ShippingDockWhereInput
    data: XOR<ShippingDockUpdateWithoutDestinationOrdersInput, ShippingDockUncheckedUpdateWithoutDestinationOrdersInput>
  }

  export type ShippingDockUpdateWithoutDestinationOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedDocksNestedInput
    transactions?: TransactionUpdateManyWithoutShippingDockNestedInput
    originOrders?: OrderUpdateManyWithoutOriginDockNestedInput
  }

  export type ShippingDockUncheckedUpdateWithoutDestinationOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutShippingDockNestedInput
    originOrders?: OrderUncheckedUpdateManyWithoutOriginDockNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutOrderInput, TransactionUncheckedUpdateWithoutOrderInput>
    create: XOR<TransactionCreateWithoutOrderInput, TransactionUncheckedCreateWithoutOrderInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutOrderInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutOrderInput, TransactionUncheckedUpdateWithoutOrderInput>
  }

  export type TransactionUpdateManyWithWhereWithoutOrderInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderHistoryUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderHistoryWhereUniqueInput
    update: XOR<OrderHistoryUpdateWithoutOrderInput, OrderHistoryUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderHistoryCreateWithoutOrderInput, OrderHistoryUncheckedCreateWithoutOrderInput>
  }

  export type OrderHistoryUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderHistoryWhereUniqueInput
    data: XOR<OrderHistoryUpdateWithoutOrderInput, OrderHistoryUncheckedUpdateWithoutOrderInput>
  }

  export type OrderHistoryUpdateManyWithWhereWithoutOrderInput = {
    where: OrderHistoryScalarWhereInput
    data: XOR<OrderHistoryUpdateManyMutationInput, OrderHistoryUncheckedUpdateManyWithoutOrderInput>
  }

  export type UserCreateWithoutManagedDocksInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutManagedDocksInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutManagedDocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedDocksInput, UserUncheckedCreateWithoutManagedDocksInput>
  }

  export type TransactionCreateWithoutShippingDockInput = {
    id?: string
    reference: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    order: OrderCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutShippingDockInput = {
    id?: string
    reference: string
    userId: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutShippingDockInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutShippingDockInput, TransactionUncheckedCreateWithoutShippingDockInput>
  }

  export type TransactionCreateManyShippingDockInputEnvelope = {
    data: TransactionCreateManyShippingDockInput | TransactionCreateManyShippingDockInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutOriginDockInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    destinationDock?: ShippingDockCreateNestedOneWithoutDestinationOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
    history?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOriginDockInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
    history?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOriginDockInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOriginDockInput, OrderUncheckedCreateWithoutOriginDockInput>
  }

  export type OrderCreateManyOriginDockInputEnvelope = {
    data: OrderCreateManyOriginDockInput | OrderCreateManyOriginDockInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutDestinationDockInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    originDock?: ShippingDockCreateNestedOneWithoutOriginOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
    history?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDestinationDockInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
    history?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDestinationDockInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDestinationDockInput, OrderUncheckedCreateWithoutDestinationDockInput>
  }

  export type OrderCreateManyDestinationDockInputEnvelope = {
    data: OrderCreateManyDestinationDockInput | OrderCreateManyDestinationDockInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutManagedDocksInput = {
    update: XOR<UserUpdateWithoutManagedDocksInput, UserUncheckedUpdateWithoutManagedDocksInput>
    create: XOR<UserCreateWithoutManagedDocksInput, UserUncheckedCreateWithoutManagedDocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedDocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedDocksInput, UserUncheckedUpdateWithoutManagedDocksInput>
  }

  export type UserUpdateWithoutManagedDocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedDocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutShippingDockInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutShippingDockInput, TransactionUncheckedUpdateWithoutShippingDockInput>
    create: XOR<TransactionCreateWithoutShippingDockInput, TransactionUncheckedCreateWithoutShippingDockInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutShippingDockInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutShippingDockInput, TransactionUncheckedUpdateWithoutShippingDockInput>
  }

  export type TransactionUpdateManyWithWhereWithoutShippingDockInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutShippingDockInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutOriginDockInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutOriginDockInput, OrderUncheckedUpdateWithoutOriginDockInput>
    create: XOR<OrderCreateWithoutOriginDockInput, OrderUncheckedCreateWithoutOriginDockInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutOriginDockInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutOriginDockInput, OrderUncheckedUpdateWithoutOriginDockInput>
  }

  export type OrderUpdateManyWithWhereWithoutOriginDockInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutOriginDockInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutDestinationDockInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDestinationDockInput, OrderUncheckedUpdateWithoutDestinationDockInput>
    create: XOR<OrderCreateWithoutDestinationDockInput, OrderUncheckedCreateWithoutDestinationDockInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDestinationDockInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDestinationDockInput, OrderUncheckedUpdateWithoutDestinationDockInput>
  }

  export type OrderUpdateManyWithWhereWithoutDestinationDockInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDestinationDockInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type OrderCreateWithoutTransactionsInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    originDock?: ShippingDockCreateNestedOneWithoutOriginOrdersInput
    destinationDock?: ShippingDockCreateNestedOneWithoutDestinationOrdersInput
    history?: OrderHistoryCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTransactionsInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: OrderHistoryUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTransactionsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
  }

  export type ShippingDockCreateWithoutTransactionsInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    manager?: UserCreateNestedOneWithoutManagedDocksInput
    originOrders?: OrderCreateNestedManyWithoutOriginDockInput
    destinationOrders?: OrderCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originOrders?: OrderUncheckedCreateNestedManyWithoutOriginDockInput
    destinationOrders?: OrderUncheckedCreateNestedManyWithoutDestinationDockInput
  }

  export type ShippingDockCreateOrConnectWithoutTransactionsInput = {
    where: ShippingDockWhereUniqueInput
    create: XOR<ShippingDockCreateWithoutTransactionsInput, ShippingDockUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OrderUpsertWithoutTransactionsInput = {
    update: XOR<OrderUpdateWithoutTransactionsInput, OrderUncheckedUpdateWithoutTransactionsInput>
    create: XOR<OrderCreateWithoutTransactionsInput, OrderUncheckedCreateWithoutTransactionsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutTransactionsInput, OrderUncheckedUpdateWithoutTransactionsInput>
  }

  export type OrderUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    originDock?: ShippingDockUpdateOneWithoutOriginOrdersNestedInput
    destinationDock?: ShippingDockUpdateOneWithoutDestinationOrdersNestedInput
    history?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ShippingDockUpsertWithoutTransactionsInput = {
    update: XOR<ShippingDockUpdateWithoutTransactionsInput, ShippingDockUncheckedUpdateWithoutTransactionsInput>
    create: XOR<ShippingDockCreateWithoutTransactionsInput, ShippingDockUncheckedCreateWithoutTransactionsInput>
    where?: ShippingDockWhereInput
  }

  export type ShippingDockUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: ShippingDockWhereInput
    data: XOR<ShippingDockUpdateWithoutTransactionsInput, ShippingDockUncheckedUpdateWithoutTransactionsInput>
  }

  export type ShippingDockUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneWithoutManagedDocksNestedInput
    originOrders?: OrderUpdateManyWithoutOriginDockNestedInput
    destinationOrders?: OrderUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originOrders?: OrderUncheckedUpdateManyWithoutOriginDockNestedInput
    destinationOrders?: OrderUncheckedUpdateManyWithoutDestinationDockNestedInput
  }

  export type UserCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutUserTokensInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutUserTokensInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutUserTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTokensInput, UserUncheckedCreateWithoutUserTokensInput>
  }

  export type UserUpsertWithoutUserTokensInput = {
    update: XOR<UserUpdateWithoutUserTokensInput, UserUncheckedUpdateWithoutUserTokensInput>
    create: XOR<UserCreateWithoutUserTokensInput, UserUncheckedCreateWithoutUserTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTokensInput, UserUncheckedUpdateWithoutUserTokensInput>
  }

  export type UserUpdateWithoutUserTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateWithoutLoginHistoriesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutLoginHistoriesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    orderHistory?: OrderHistoryUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutLoginHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoginHistoriesInput, UserUncheckedCreateWithoutLoginHistoriesInput>
  }

  export type UserUpsertWithoutLoginHistoriesInput = {
    update: XOR<UserUpdateWithoutLoginHistoriesInput, UserUncheckedUpdateWithoutLoginHistoriesInput>
    create: XOR<UserCreateWithoutLoginHistoriesInput, UserUncheckedCreateWithoutLoginHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoginHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoginHistoriesInput, UserUncheckedUpdateWithoutLoginHistoriesInput>
  }

  export type UserUpdateWithoutLoginHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutLoginHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    orderHistory?: OrderHistoryUncheckedUpdateManyWithoutActorNestedInput
  }

  export type OrderCreateWithoutHistoryInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    originDock?: ShippingDockCreateNestedOneWithoutOriginOrdersInput
    destinationDock?: ShippingDockCreateNestedOneWithoutDestinationOrdersInput
    transactions?: TransactionCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutHistoryInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutHistoryInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutHistoryInput, OrderUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutOrderHistoryInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    userTokens?: UserTokenCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderHistoryInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    role?: $Enums.UserRole
    isActive?: boolean
    isEmailVerified?: boolean
    profileImageUrl?: string | null
    twoFactorSecret?: string | null
    isTwoFactorEnabled?: boolean
    lastLoginAt?: Date | string | null
    currentLoginIp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    managedDocks?: ShippingDockUncheckedCreateNestedManyWithoutManagerInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    userTokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    loginHistories?: LoginHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
  }

  export type OrderUpsertWithoutHistoryInput = {
    update: XOR<OrderUpdateWithoutHistoryInput, OrderUncheckedUpdateWithoutHistoryInput>
    create: XOR<OrderCreateWithoutHistoryInput, OrderUncheckedCreateWithoutHistoryInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutHistoryInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutHistoryInput, OrderUncheckedUpdateWithoutHistoryInput>
  }

  export type OrderUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    originDock?: ShippingDockUpdateOneWithoutOriginOrdersNestedInput
    destinationDock?: ShippingDockUpdateOneWithoutDestinationOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserUpsertWithoutOrderHistoryInput = {
    update: XOR<UserUpdateWithoutOrderHistoryInput, UserUncheckedUpdateWithoutOrderHistoryInput>
    create: XOR<UserCreateWithoutOrderHistoryInput, UserUncheckedCreateWithoutOrderHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderHistoryInput, UserUncheckedUpdateWithoutOrderHistoryInput>
  }

  export type UserUpdateWithoutOrderHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twoFactorSecret?: NullableStringFieldUpdateOperationsInput | string | null
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentLoginIp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    managedDocks?: ShippingDockUncheckedUpdateManyWithoutManagerNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    userTokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    loginHistories?: LoginHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    trackingNumber: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    reference: string
    orderId: string
    shippingDockId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShippingDockCreateManyManagerInput = {
    id?: string
    name: string
    code: string
    status?: $Enums.DockStatus
    location: string
    address?: string | null
    capacity?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    ipAddress?: string | null
    userAgent?: string | null
    statusCode?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type UserTokenCreateManyUserInput = {
    id?: string
    token: string
    type: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LoginHistoryCreateManyUserInput = {
    id?: string
    ipAddress?: string | null
    userAgent?: string | null
    isSuccessful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type OrderHistoryCreateManyActorInput = {
    id?: string
    orderId: string
    status: $Enums.OrderStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originDock?: ShippingDockUpdateOneWithoutOriginOrdersNestedInput
    destinationDock?: ShippingDockUpdateOneWithoutDestinationOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutTransactionsNestedInput
    shippingDock?: ShippingDockUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    shippingDockId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    shippingDockId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingDockUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutShippingDockNestedInput
    originOrders?: OrderUpdateManyWithoutOriginDockNestedInput
    destinationOrders?: OrderUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutShippingDockNestedInput
    originOrders?: OrderUncheckedUpdateManyWithoutOriginDockNestedInput
    destinationOrders?: OrderUncheckedUpdateManyWithoutDestinationDockNestedInput
  }

  export type ShippingDockUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    status?: EnumDockStatusFieldUpdateOperationsInput | $Enums.DockStatus
    location?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    statusCode?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type OrderHistoryUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyOrderInput = {
    id?: string
    reference: string
    userId: string
    shippingDockId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderHistoryCreateManyOrderInput = {
    id?: string
    status: $Enums.OrderStatus
    notes?: string | null
    actorId?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    shippingDock?: ShippingDockUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shippingDockId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shippingDockId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutOrderHistoryNestedInput
  }

  export type OrderHistoryUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderHistoryUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyShippingDockInput = {
    id?: string
    reference: string
    userId: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    paymentMethod?: $Enums.PaymentMethod
    notes?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyOriginDockInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    destinationDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyDestinationDockInput = {
    id?: string
    trackingNumber: string
    userId: string
    amount: Decimal | DecimalJsLike | number | string
    taxAmount: Decimal | DecimalJsLike | number | string
    shippingFee?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    notes?: string | null
    status?: $Enums.OrderStatus
    priority?: $Enums.OrderPriority
    originAddress: string
    destinationAddress: string
    recipientName: string
    recipientPhone: string
    weightKg?: Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: Decimal | DecimalJsLike | number | string | null
    dimensions?: string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    originDockId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutShippingDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    order?: OrderUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutShippingDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutShippingDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutOriginDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    destinationDock?: ShippingDockUpdateOneWithoutDestinationOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOriginDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutOriginDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    destinationDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutDestinationDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    originDock?: ShippingDockUpdateOneWithoutOriginOrdersNestedInput
    transactions?: TransactionUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDestinationDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutOrderNestedInput
    history?: OrderHistoryUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDestinationDockInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    taxAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shippingFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: EnumOrderPriorityFieldUpdateOperationsInput | $Enums.OrderPriority
    originAddress?: StringFieldUpdateOperationsInput | string
    destinationAddress?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    volumetricWeight?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    originDockId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}