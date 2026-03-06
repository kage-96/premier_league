
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model GoogleCredential
 * 
 */
export type GoogleCredential = $Result.DefaultSelection<Prisma.$GoogleCredentialPayload>
/**
 * Model CalendarEventLink
 * 
 */
export type CalendarEventLink = $Result.DefaultSelection<Prisma.$CalendarEventLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CalendarLinkStatus: {
  CREATED: 'CREATED',
  DELETED: 'DELETED',
  FAILED: 'FAILED'
};

export type CalendarLinkStatus = (typeof CalendarLinkStatus)[keyof typeof CalendarLinkStatus]

}

export type CalendarLinkStatus = $Enums.CalendarLinkStatus

export const CalendarLinkStatus: typeof $Enums.CalendarLinkStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.googleCredential`: Exposes CRUD operations for the **GoogleCredential** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleCredentials
    * const googleCredentials = await prisma.googleCredential.findMany()
    * ```
    */
  get googleCredential(): Prisma.GoogleCredentialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarEventLink`: Exposes CRUD operations for the **CalendarEventLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarEventLinks
    * const calendarEventLinks = await prisma.calendarEventLink.findMany()
    * ```
    */
  get calendarEventLink(): Prisma.CalendarEventLinkDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    GoogleCredential: 'GoogleCredential',
    CalendarEventLink: 'CalendarEventLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "googleCredential" | "calendarEventLink"
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
      GoogleCredential: {
        payload: Prisma.$GoogleCredentialPayload<ExtArgs>
        fields: Prisma.GoogleCredentialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleCredentialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleCredentialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>
          }
          findFirst: {
            args: Prisma.GoogleCredentialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleCredentialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>
          }
          findMany: {
            args: Prisma.GoogleCredentialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>[]
          }
          create: {
            args: Prisma.GoogleCredentialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>
          }
          createMany: {
            args: Prisma.GoogleCredentialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoogleCredentialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>[]
          }
          delete: {
            args: Prisma.GoogleCredentialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>
          }
          update: {
            args: Prisma.GoogleCredentialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>
          }
          deleteMany: {
            args: Prisma.GoogleCredentialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleCredentialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoogleCredentialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>[]
          }
          upsert: {
            args: Prisma.GoogleCredentialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoogleCredentialPayload>
          }
          aggregate: {
            args: Prisma.GoogleCredentialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoogleCredential>
          }
          groupBy: {
            args: Prisma.GoogleCredentialGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoogleCredentialGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleCredentialCountArgs<ExtArgs>
            result: $Utils.Optional<GoogleCredentialCountAggregateOutputType> | number
          }
        }
      }
      CalendarEventLink: {
        payload: Prisma.$CalendarEventLinkPayload<ExtArgs>
        fields: Prisma.CalendarEventLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarEventLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarEventLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>
          }
          findFirst: {
            args: Prisma.CalendarEventLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarEventLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>
          }
          findMany: {
            args: Prisma.CalendarEventLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>[]
          }
          create: {
            args: Prisma.CalendarEventLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>
          }
          createMany: {
            args: Prisma.CalendarEventLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarEventLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>[]
          }
          delete: {
            args: Prisma.CalendarEventLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>
          }
          update: {
            args: Prisma.CalendarEventLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>
          }
          deleteMany: {
            args: Prisma.CalendarEventLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarEventLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarEventLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>[]
          }
          upsert: {
            args: Prisma.CalendarEventLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventLinkPayload>
          }
          aggregate: {
            args: Prisma.CalendarEventLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarEventLink>
          }
          groupBy: {
            args: Prisma.CalendarEventLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarEventLinkCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventLinkCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    googleCredential?: GoogleCredentialOmit
    calendarEventLink?: CalendarEventLinkOmit
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
    calendarLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendarLinks?: boolean | UserCountOutputTypeCountCalendarLinksArgs
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
  export type UserCountOutputTypeCountCalendarLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventLinkWhereInput
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
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
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
    email: string
    passwordHash: string
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
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleCredential?: boolean | User$googleCredentialArgs<ExtArgs>
    calendarLinks?: boolean | User$calendarLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    googleCredential?: boolean | User$googleCredentialArgs<ExtArgs>
    calendarLinks?: boolean | User$calendarLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      googleCredential: Prisma.$GoogleCredentialPayload<ExtArgs> | null
      calendarLinks: Prisma.$CalendarEventLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
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
    googleCredential<T extends User$googleCredentialArgs<ExtArgs> = {}>(args?: Subset<T, User$googleCredentialArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    calendarLinks<T extends User$calendarLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
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
   * User.googleCredential
   */
  export type User$googleCredentialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    where?: GoogleCredentialWhereInput
  }

  /**
   * User.calendarLinks
   */
  export type User$calendarLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    where?: CalendarEventLinkWhereInput
    orderBy?: CalendarEventLinkOrderByWithRelationInput | CalendarEventLinkOrderByWithRelationInput[]
    cursor?: CalendarEventLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventLinkScalarFieldEnum | CalendarEventLinkScalarFieldEnum[]
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
   * Model GoogleCredential
   */

  export type AggregateGoogleCredential = {
    _count: GoogleCredentialCountAggregateOutputType | null
    _min: GoogleCredentialMinAggregateOutputType | null
    _max: GoogleCredentialMaxAggregateOutputType | null
  }

  export type GoogleCredentialMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiryDate: Date | null
    scope: string | null
    tokenType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleCredentialMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiryDate: Date | null
    scope: string | null
    tokenType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleCredentialCountAggregateOutputType = {
    id: number
    userId: number
    accessToken: number
    refreshToken: number
    expiryDate: number
    scope: number
    tokenType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoogleCredentialMinAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiryDate?: true
    scope?: true
    tokenType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleCredentialMaxAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiryDate?: true
    scope?: true
    tokenType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleCredentialCountAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    expiryDate?: true
    scope?: true
    tokenType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoogleCredentialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleCredential to aggregate.
     */
    where?: GoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleCredentials to fetch.
     */
    orderBy?: GoogleCredentialOrderByWithRelationInput | GoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleCredentials
    **/
    _count?: true | GoogleCredentialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleCredentialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleCredentialMaxAggregateInputType
  }

  export type GetGoogleCredentialAggregateType<T extends GoogleCredentialAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleCredential]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleCredential[P]>
      : GetScalarType<T[P], AggregateGoogleCredential[P]>
  }




  export type GoogleCredentialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoogleCredentialWhereInput
    orderBy?: GoogleCredentialOrderByWithAggregationInput | GoogleCredentialOrderByWithAggregationInput[]
    by: GoogleCredentialScalarFieldEnum[] | GoogleCredentialScalarFieldEnum
    having?: GoogleCredentialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleCredentialCountAggregateInputType | true
    _min?: GoogleCredentialMinAggregateInputType
    _max?: GoogleCredentialMaxAggregateInputType
  }

  export type GoogleCredentialGroupByOutputType = {
    id: string
    userId: string
    accessToken: string
    refreshToken: string
    expiryDate: Date
    scope: string | null
    tokenType: string
    createdAt: Date
    updatedAt: Date
    _count: GoogleCredentialCountAggregateOutputType | null
    _min: GoogleCredentialMinAggregateOutputType | null
    _max: GoogleCredentialMaxAggregateOutputType | null
  }

  type GetGoogleCredentialGroupByPayload<T extends GoogleCredentialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleCredentialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleCredentialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleCredentialGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleCredentialGroupByOutputType[P]>
        }
      >
    >


  export type GoogleCredentialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiryDate?: boolean
    scope?: boolean
    tokenType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleCredential"]>

  export type GoogleCredentialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiryDate?: boolean
    scope?: boolean
    tokenType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleCredential"]>

  export type GoogleCredentialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiryDate?: boolean
    scope?: boolean
    tokenType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["googleCredential"]>

  export type GoogleCredentialSelectScalar = {
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiryDate?: boolean
    scope?: boolean
    tokenType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoogleCredentialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accessToken" | "refreshToken" | "expiryDate" | "scope" | "tokenType" | "createdAt" | "updatedAt", ExtArgs["result"]["googleCredential"]>
  export type GoogleCredentialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoogleCredentialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoogleCredentialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoogleCredentialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoogleCredential"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accessToken: string
      refreshToken: string
      expiryDate: Date
      scope: string | null
      tokenType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["googleCredential"]>
    composites: {}
  }

  type GoogleCredentialGetPayload<S extends boolean | null | undefined | GoogleCredentialDefaultArgs> = $Result.GetResult<Prisma.$GoogleCredentialPayload, S>

  type GoogleCredentialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoogleCredentialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoogleCredentialCountAggregateInputType | true
    }

  export interface GoogleCredentialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleCredential'], meta: { name: 'GoogleCredential' } }
    /**
     * Find zero or one GoogleCredential that matches the filter.
     * @param {GoogleCredentialFindUniqueArgs} args - Arguments to find a GoogleCredential
     * @example
     * // Get one GoogleCredential
     * const googleCredential = await prisma.googleCredential.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoogleCredentialFindUniqueArgs>(args: SelectSubset<T, GoogleCredentialFindUniqueArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoogleCredential that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoogleCredentialFindUniqueOrThrowArgs} args - Arguments to find a GoogleCredential
     * @example
     * // Get one GoogleCredential
     * const googleCredential = await prisma.googleCredential.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoogleCredentialFindUniqueOrThrowArgs>(args: SelectSubset<T, GoogleCredentialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleCredential that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialFindFirstArgs} args - Arguments to find a GoogleCredential
     * @example
     * // Get one GoogleCredential
     * const googleCredential = await prisma.googleCredential.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoogleCredentialFindFirstArgs>(args?: SelectSubset<T, GoogleCredentialFindFirstArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoogleCredential that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialFindFirstOrThrowArgs} args - Arguments to find a GoogleCredential
     * @example
     * // Get one GoogleCredential
     * const googleCredential = await prisma.googleCredential.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoogleCredentialFindFirstOrThrowArgs>(args?: SelectSubset<T, GoogleCredentialFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoogleCredentials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleCredentials
     * const googleCredentials = await prisma.googleCredential.findMany()
     * 
     * // Get first 10 GoogleCredentials
     * const googleCredentials = await prisma.googleCredential.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const googleCredentialWithIdOnly = await prisma.googleCredential.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoogleCredentialFindManyArgs>(args?: SelectSubset<T, GoogleCredentialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoogleCredential.
     * @param {GoogleCredentialCreateArgs} args - Arguments to create a GoogleCredential.
     * @example
     * // Create one GoogleCredential
     * const GoogleCredential = await prisma.googleCredential.create({
     *   data: {
     *     // ... data to create a GoogleCredential
     *   }
     * })
     * 
     */
    create<T extends GoogleCredentialCreateArgs>(args: SelectSubset<T, GoogleCredentialCreateArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoogleCredentials.
     * @param {GoogleCredentialCreateManyArgs} args - Arguments to create many GoogleCredentials.
     * @example
     * // Create many GoogleCredentials
     * const googleCredential = await prisma.googleCredential.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoogleCredentialCreateManyArgs>(args?: SelectSubset<T, GoogleCredentialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoogleCredentials and returns the data saved in the database.
     * @param {GoogleCredentialCreateManyAndReturnArgs} args - Arguments to create many GoogleCredentials.
     * @example
     * // Create many GoogleCredentials
     * const googleCredential = await prisma.googleCredential.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoogleCredentials and only return the `id`
     * const googleCredentialWithIdOnly = await prisma.googleCredential.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoogleCredentialCreateManyAndReturnArgs>(args?: SelectSubset<T, GoogleCredentialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoogleCredential.
     * @param {GoogleCredentialDeleteArgs} args - Arguments to delete one GoogleCredential.
     * @example
     * // Delete one GoogleCredential
     * const GoogleCredential = await prisma.googleCredential.delete({
     *   where: {
     *     // ... filter to delete one GoogleCredential
     *   }
     * })
     * 
     */
    delete<T extends GoogleCredentialDeleteArgs>(args: SelectSubset<T, GoogleCredentialDeleteArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoogleCredential.
     * @param {GoogleCredentialUpdateArgs} args - Arguments to update one GoogleCredential.
     * @example
     * // Update one GoogleCredential
     * const googleCredential = await prisma.googleCredential.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoogleCredentialUpdateArgs>(args: SelectSubset<T, GoogleCredentialUpdateArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoogleCredentials.
     * @param {GoogleCredentialDeleteManyArgs} args - Arguments to filter GoogleCredentials to delete.
     * @example
     * // Delete a few GoogleCredentials
     * const { count } = await prisma.googleCredential.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoogleCredentialDeleteManyArgs>(args?: SelectSubset<T, GoogleCredentialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleCredentials
     * const googleCredential = await prisma.googleCredential.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoogleCredentialUpdateManyArgs>(args: SelectSubset<T, GoogleCredentialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleCredentials and returns the data updated in the database.
     * @param {GoogleCredentialUpdateManyAndReturnArgs} args - Arguments to update many GoogleCredentials.
     * @example
     * // Update many GoogleCredentials
     * const googleCredential = await prisma.googleCredential.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoogleCredentials and only return the `id`
     * const googleCredentialWithIdOnly = await prisma.googleCredential.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoogleCredentialUpdateManyAndReturnArgs>(args: SelectSubset<T, GoogleCredentialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoogleCredential.
     * @param {GoogleCredentialUpsertArgs} args - Arguments to update or create a GoogleCredential.
     * @example
     * // Update or create a GoogleCredential
     * const googleCredential = await prisma.googleCredential.upsert({
     *   create: {
     *     // ... data to create a GoogleCredential
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleCredential we want to update
     *   }
     * })
     */
    upsert<T extends GoogleCredentialUpsertArgs>(args: SelectSubset<T, GoogleCredentialUpsertArgs<ExtArgs>>): Prisma__GoogleCredentialClient<$Result.GetResult<Prisma.$GoogleCredentialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoogleCredentials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialCountArgs} args - Arguments to filter GoogleCredentials to count.
     * @example
     * // Count the number of GoogleCredentials
     * const count = await prisma.googleCredential.count({
     *   where: {
     *     // ... the filter for the GoogleCredentials we want to count
     *   }
     * })
    **/
    count<T extends GoogleCredentialCountArgs>(
      args?: Subset<T, GoogleCredentialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleCredentialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoogleCredentialAggregateArgs>(args: Subset<T, GoogleCredentialAggregateArgs>): Prisma.PrismaPromise<GetGoogleCredentialAggregateType<T>>

    /**
     * Group by GoogleCredential.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleCredentialGroupByArgs} args - Group by arguments.
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
      T extends GoogleCredentialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleCredentialGroupByArgs['orderBy'] }
        : { orderBy?: GoogleCredentialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoogleCredentialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleCredentialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleCredential model
   */
  readonly fields: GoogleCredentialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleCredential.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleCredentialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GoogleCredential model
   */
  interface GoogleCredentialFieldRefs {
    readonly id: FieldRef<"GoogleCredential", 'String'>
    readonly userId: FieldRef<"GoogleCredential", 'String'>
    readonly accessToken: FieldRef<"GoogleCredential", 'String'>
    readonly refreshToken: FieldRef<"GoogleCredential", 'String'>
    readonly expiryDate: FieldRef<"GoogleCredential", 'DateTime'>
    readonly scope: FieldRef<"GoogleCredential", 'String'>
    readonly tokenType: FieldRef<"GoogleCredential", 'String'>
    readonly createdAt: FieldRef<"GoogleCredential", 'DateTime'>
    readonly updatedAt: FieldRef<"GoogleCredential", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoogleCredential findUnique
   */
  export type GoogleCredentialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which GoogleCredential to fetch.
     */
    where: GoogleCredentialWhereUniqueInput
  }

  /**
   * GoogleCredential findUniqueOrThrow
   */
  export type GoogleCredentialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which GoogleCredential to fetch.
     */
    where: GoogleCredentialWhereUniqueInput
  }

  /**
   * GoogleCredential findFirst
   */
  export type GoogleCredentialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which GoogleCredential to fetch.
     */
    where?: GoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleCredentials to fetch.
     */
    orderBy?: GoogleCredentialOrderByWithRelationInput | GoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleCredentials.
     */
    cursor?: GoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleCredentials.
     */
    distinct?: GoogleCredentialScalarFieldEnum | GoogleCredentialScalarFieldEnum[]
  }

  /**
   * GoogleCredential findFirstOrThrow
   */
  export type GoogleCredentialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which GoogleCredential to fetch.
     */
    where?: GoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleCredentials to fetch.
     */
    orderBy?: GoogleCredentialOrderByWithRelationInput | GoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleCredentials.
     */
    cursor?: GoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleCredentials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleCredentials.
     */
    distinct?: GoogleCredentialScalarFieldEnum | GoogleCredentialScalarFieldEnum[]
  }

  /**
   * GoogleCredential findMany
   */
  export type GoogleCredentialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter, which GoogleCredentials to fetch.
     */
    where?: GoogleCredentialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleCredentials to fetch.
     */
    orderBy?: GoogleCredentialOrderByWithRelationInput | GoogleCredentialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleCredentials.
     */
    cursor?: GoogleCredentialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleCredentials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleCredentials.
     */
    skip?: number
    distinct?: GoogleCredentialScalarFieldEnum | GoogleCredentialScalarFieldEnum[]
  }

  /**
   * GoogleCredential create
   */
  export type GoogleCredentialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * The data needed to create a GoogleCredential.
     */
    data: XOR<GoogleCredentialCreateInput, GoogleCredentialUncheckedCreateInput>
  }

  /**
   * GoogleCredential createMany
   */
  export type GoogleCredentialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleCredentials.
     */
    data: GoogleCredentialCreateManyInput | GoogleCredentialCreateManyInput[]
  }

  /**
   * GoogleCredential createManyAndReturn
   */
  export type GoogleCredentialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * The data used to create many GoogleCredentials.
     */
    data: GoogleCredentialCreateManyInput | GoogleCredentialCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleCredential update
   */
  export type GoogleCredentialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * The data needed to update a GoogleCredential.
     */
    data: XOR<GoogleCredentialUpdateInput, GoogleCredentialUncheckedUpdateInput>
    /**
     * Choose, which GoogleCredential to update.
     */
    where: GoogleCredentialWhereUniqueInput
  }

  /**
   * GoogleCredential updateMany
   */
  export type GoogleCredentialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleCredentials.
     */
    data: XOR<GoogleCredentialUpdateManyMutationInput, GoogleCredentialUncheckedUpdateManyInput>
    /**
     * Filter which GoogleCredentials to update
     */
    where?: GoogleCredentialWhereInput
    /**
     * Limit how many GoogleCredentials to update.
     */
    limit?: number
  }

  /**
   * GoogleCredential updateManyAndReturn
   */
  export type GoogleCredentialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * The data used to update GoogleCredentials.
     */
    data: XOR<GoogleCredentialUpdateManyMutationInput, GoogleCredentialUncheckedUpdateManyInput>
    /**
     * Filter which GoogleCredentials to update
     */
    where?: GoogleCredentialWhereInput
    /**
     * Limit how many GoogleCredentials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoogleCredential upsert
   */
  export type GoogleCredentialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * The filter to search for the GoogleCredential to update in case it exists.
     */
    where: GoogleCredentialWhereUniqueInput
    /**
     * In case the GoogleCredential found by the `where` argument doesn't exist, create a new GoogleCredential with this data.
     */
    create: XOR<GoogleCredentialCreateInput, GoogleCredentialUncheckedCreateInput>
    /**
     * In case the GoogleCredential was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleCredentialUpdateInput, GoogleCredentialUncheckedUpdateInput>
  }

  /**
   * GoogleCredential delete
   */
  export type GoogleCredentialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
    /**
     * Filter which GoogleCredential to delete.
     */
    where: GoogleCredentialWhereUniqueInput
  }

  /**
   * GoogleCredential deleteMany
   */
  export type GoogleCredentialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleCredentials to delete
     */
    where?: GoogleCredentialWhereInput
    /**
     * Limit how many GoogleCredentials to delete.
     */
    limit?: number
  }

  /**
   * GoogleCredential without action
   */
  export type GoogleCredentialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleCredential
     */
    select?: GoogleCredentialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoogleCredential
     */
    omit?: GoogleCredentialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoogleCredentialInclude<ExtArgs> | null
  }


  /**
   * Model CalendarEventLink
   */

  export type AggregateCalendarEventLink = {
    _count: CalendarEventLinkCountAggregateOutputType | null
    _avg: CalendarEventLinkAvgAggregateOutputType | null
    _sum: CalendarEventLinkSumAggregateOutputType | null
    _min: CalendarEventLinkMinAggregateOutputType | null
    _max: CalendarEventLinkMaxAggregateOutputType | null
  }

  export type CalendarEventLinkAvgAggregateOutputType = {
    matchId: number | null
  }

  export type CalendarEventLinkSumAggregateOutputType = {
    matchId: number | null
  }

  export type CalendarEventLinkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matchId: number | null
    googleEventId: string | null
    status: $Enums.CalendarLinkStatus | null
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarEventLinkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matchId: number | null
    googleEventId: string | null
    status: $Enums.CalendarLinkStatus | null
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CalendarEventLinkCountAggregateOutputType = {
    id: number
    userId: number
    matchId: number
    googleEventId: number
    status: number
    errorCode: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CalendarEventLinkAvgAggregateInputType = {
    matchId?: true
  }

  export type CalendarEventLinkSumAggregateInputType = {
    matchId?: true
  }

  export type CalendarEventLinkMinAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    googleEventId?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarEventLinkMaxAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    googleEventId?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CalendarEventLinkCountAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    googleEventId?: true
    status?: true
    errorCode?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CalendarEventLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEventLink to aggregate.
     */
    where?: CalendarEventLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEventLinks to fetch.
     */
    orderBy?: CalendarEventLinkOrderByWithRelationInput | CalendarEventLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarEventLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEventLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEventLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarEventLinks
    **/
    _count?: true | CalendarEventLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarEventLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarEventLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarEventLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarEventLinkMaxAggregateInputType
  }

  export type GetCalendarEventLinkAggregateType<T extends CalendarEventLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarEventLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarEventLink[P]>
      : GetScalarType<T[P], AggregateCalendarEventLink[P]>
  }




  export type CalendarEventLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventLinkWhereInput
    orderBy?: CalendarEventLinkOrderByWithAggregationInput | CalendarEventLinkOrderByWithAggregationInput[]
    by: CalendarEventLinkScalarFieldEnum[] | CalendarEventLinkScalarFieldEnum
    having?: CalendarEventLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarEventLinkCountAggregateInputType | true
    _avg?: CalendarEventLinkAvgAggregateInputType
    _sum?: CalendarEventLinkSumAggregateInputType
    _min?: CalendarEventLinkMinAggregateInputType
    _max?: CalendarEventLinkMaxAggregateInputType
  }

  export type CalendarEventLinkGroupByOutputType = {
    id: string
    userId: string
    matchId: number
    googleEventId: string | null
    status: $Enums.CalendarLinkStatus
    errorCode: string | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: CalendarEventLinkCountAggregateOutputType | null
    _avg: CalendarEventLinkAvgAggregateOutputType | null
    _sum: CalendarEventLinkSumAggregateOutputType | null
    _min: CalendarEventLinkMinAggregateOutputType | null
    _max: CalendarEventLinkMaxAggregateOutputType | null
  }

  type GetCalendarEventLinkGroupByPayload<T extends CalendarEventLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarEventLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarEventLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarEventLinkGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarEventLinkGroupByOutputType[P]>
        }
      >
    >


  export type CalendarEventLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    googleEventId?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEventLink"]>

  export type CalendarEventLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    googleEventId?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEventLink"]>

  export type CalendarEventLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    googleEventId?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEventLink"]>

  export type CalendarEventLinkSelectScalar = {
    id?: boolean
    userId?: boolean
    matchId?: boolean
    googleEventId?: boolean
    status?: boolean
    errorCode?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CalendarEventLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchId" | "googleEventId" | "status" | "errorCode" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["calendarEventLink"]>
  export type CalendarEventLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarEventLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarEventLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CalendarEventLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEventLink"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      matchId: number
      googleEventId: string | null
      status: $Enums.CalendarLinkStatus
      errorCode: string | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["calendarEventLink"]>
    composites: {}
  }

  type CalendarEventLinkGetPayload<S extends boolean | null | undefined | CalendarEventLinkDefaultArgs> = $Result.GetResult<Prisma.$CalendarEventLinkPayload, S>

  type CalendarEventLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarEventLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarEventLinkCountAggregateInputType | true
    }

  export interface CalendarEventLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarEventLink'], meta: { name: 'CalendarEventLink' } }
    /**
     * Find zero or one CalendarEventLink that matches the filter.
     * @param {CalendarEventLinkFindUniqueArgs} args - Arguments to find a CalendarEventLink
     * @example
     * // Get one CalendarEventLink
     * const calendarEventLink = await prisma.calendarEventLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarEventLinkFindUniqueArgs>(args: SelectSubset<T, CalendarEventLinkFindUniqueArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarEventLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarEventLinkFindUniqueOrThrowArgs} args - Arguments to find a CalendarEventLink
     * @example
     * // Get one CalendarEventLink
     * const calendarEventLink = await prisma.calendarEventLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarEventLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarEventLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEventLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkFindFirstArgs} args - Arguments to find a CalendarEventLink
     * @example
     * // Get one CalendarEventLink
     * const calendarEventLink = await prisma.calendarEventLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarEventLinkFindFirstArgs>(args?: SelectSubset<T, CalendarEventLinkFindFirstArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEventLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkFindFirstOrThrowArgs} args - Arguments to find a CalendarEventLink
     * @example
     * // Get one CalendarEventLink
     * const calendarEventLink = await prisma.calendarEventLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarEventLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarEventLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarEventLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarEventLinks
     * const calendarEventLinks = await prisma.calendarEventLink.findMany()
     * 
     * // Get first 10 CalendarEventLinks
     * const calendarEventLinks = await prisma.calendarEventLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarEventLinkWithIdOnly = await prisma.calendarEventLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarEventLinkFindManyArgs>(args?: SelectSubset<T, CalendarEventLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarEventLink.
     * @param {CalendarEventLinkCreateArgs} args - Arguments to create a CalendarEventLink.
     * @example
     * // Create one CalendarEventLink
     * const CalendarEventLink = await prisma.calendarEventLink.create({
     *   data: {
     *     // ... data to create a CalendarEventLink
     *   }
     * })
     * 
     */
    create<T extends CalendarEventLinkCreateArgs>(args: SelectSubset<T, CalendarEventLinkCreateArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarEventLinks.
     * @param {CalendarEventLinkCreateManyArgs} args - Arguments to create many CalendarEventLinks.
     * @example
     * // Create many CalendarEventLinks
     * const calendarEventLink = await prisma.calendarEventLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarEventLinkCreateManyArgs>(args?: SelectSubset<T, CalendarEventLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarEventLinks and returns the data saved in the database.
     * @param {CalendarEventLinkCreateManyAndReturnArgs} args - Arguments to create many CalendarEventLinks.
     * @example
     * // Create many CalendarEventLinks
     * const calendarEventLink = await prisma.calendarEventLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarEventLinks and only return the `id`
     * const calendarEventLinkWithIdOnly = await prisma.calendarEventLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarEventLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarEventLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarEventLink.
     * @param {CalendarEventLinkDeleteArgs} args - Arguments to delete one CalendarEventLink.
     * @example
     * // Delete one CalendarEventLink
     * const CalendarEventLink = await prisma.calendarEventLink.delete({
     *   where: {
     *     // ... filter to delete one CalendarEventLink
     *   }
     * })
     * 
     */
    delete<T extends CalendarEventLinkDeleteArgs>(args: SelectSubset<T, CalendarEventLinkDeleteArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarEventLink.
     * @param {CalendarEventLinkUpdateArgs} args - Arguments to update one CalendarEventLink.
     * @example
     * // Update one CalendarEventLink
     * const calendarEventLink = await prisma.calendarEventLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarEventLinkUpdateArgs>(args: SelectSubset<T, CalendarEventLinkUpdateArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarEventLinks.
     * @param {CalendarEventLinkDeleteManyArgs} args - Arguments to filter CalendarEventLinks to delete.
     * @example
     * // Delete a few CalendarEventLinks
     * const { count } = await prisma.calendarEventLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarEventLinkDeleteManyArgs>(args?: SelectSubset<T, CalendarEventLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEventLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarEventLinks
     * const calendarEventLink = await prisma.calendarEventLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarEventLinkUpdateManyArgs>(args: SelectSubset<T, CalendarEventLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEventLinks and returns the data updated in the database.
     * @param {CalendarEventLinkUpdateManyAndReturnArgs} args - Arguments to update many CalendarEventLinks.
     * @example
     * // Update many CalendarEventLinks
     * const calendarEventLink = await prisma.calendarEventLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarEventLinks and only return the `id`
     * const calendarEventLinkWithIdOnly = await prisma.calendarEventLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends CalendarEventLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarEventLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarEventLink.
     * @param {CalendarEventLinkUpsertArgs} args - Arguments to update or create a CalendarEventLink.
     * @example
     * // Update or create a CalendarEventLink
     * const calendarEventLink = await prisma.calendarEventLink.upsert({
     *   create: {
     *     // ... data to create a CalendarEventLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarEventLink we want to update
     *   }
     * })
     */
    upsert<T extends CalendarEventLinkUpsertArgs>(args: SelectSubset<T, CalendarEventLinkUpsertArgs<ExtArgs>>): Prisma__CalendarEventLinkClient<$Result.GetResult<Prisma.$CalendarEventLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarEventLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkCountArgs} args - Arguments to filter CalendarEventLinks to count.
     * @example
     * // Count the number of CalendarEventLinks
     * const count = await prisma.calendarEventLink.count({
     *   where: {
     *     // ... the filter for the CalendarEventLinks we want to count
     *   }
     * })
    **/
    count<T extends CalendarEventLinkCountArgs>(
      args?: Subset<T, CalendarEventLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarEventLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarEventLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarEventLinkAggregateArgs>(args: Subset<T, CalendarEventLinkAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventLinkAggregateType<T>>

    /**
     * Group by CalendarEventLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventLinkGroupByArgs} args - Group by arguments.
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
      T extends CalendarEventLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarEventLinkGroupByArgs['orderBy'] }
        : { orderBy?: CalendarEventLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarEventLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarEventLink model
   */
  readonly fields: CalendarEventLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarEventLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarEventLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CalendarEventLink model
   */
  interface CalendarEventLinkFieldRefs {
    readonly id: FieldRef<"CalendarEventLink", 'String'>
    readonly userId: FieldRef<"CalendarEventLink", 'String'>
    readonly matchId: FieldRef<"CalendarEventLink", 'Int'>
    readonly googleEventId: FieldRef<"CalendarEventLink", 'String'>
    readonly status: FieldRef<"CalendarEventLink", 'CalendarLinkStatus'>
    readonly errorCode: FieldRef<"CalendarEventLink", 'String'>
    readonly errorMessage: FieldRef<"CalendarEventLink", 'String'>
    readonly createdAt: FieldRef<"CalendarEventLink", 'DateTime'>
    readonly updatedAt: FieldRef<"CalendarEventLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarEventLink findUnique
   */
  export type CalendarEventLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEventLink to fetch.
     */
    where: CalendarEventLinkWhereUniqueInput
  }

  /**
   * CalendarEventLink findUniqueOrThrow
   */
  export type CalendarEventLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEventLink to fetch.
     */
    where: CalendarEventLinkWhereUniqueInput
  }

  /**
   * CalendarEventLink findFirst
   */
  export type CalendarEventLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEventLink to fetch.
     */
    where?: CalendarEventLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEventLinks to fetch.
     */
    orderBy?: CalendarEventLinkOrderByWithRelationInput | CalendarEventLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEventLinks.
     */
    cursor?: CalendarEventLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEventLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEventLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEventLinks.
     */
    distinct?: CalendarEventLinkScalarFieldEnum | CalendarEventLinkScalarFieldEnum[]
  }

  /**
   * CalendarEventLink findFirstOrThrow
   */
  export type CalendarEventLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEventLink to fetch.
     */
    where?: CalendarEventLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEventLinks to fetch.
     */
    orderBy?: CalendarEventLinkOrderByWithRelationInput | CalendarEventLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEventLinks.
     */
    cursor?: CalendarEventLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEventLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEventLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEventLinks.
     */
    distinct?: CalendarEventLinkScalarFieldEnum | CalendarEventLinkScalarFieldEnum[]
  }

  /**
   * CalendarEventLink findMany
   */
  export type CalendarEventLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEventLinks to fetch.
     */
    where?: CalendarEventLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEventLinks to fetch.
     */
    orderBy?: CalendarEventLinkOrderByWithRelationInput | CalendarEventLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarEventLinks.
     */
    cursor?: CalendarEventLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEventLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEventLinks.
     */
    skip?: number
    distinct?: CalendarEventLinkScalarFieldEnum | CalendarEventLinkScalarFieldEnum[]
  }

  /**
   * CalendarEventLink create
   */
  export type CalendarEventLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a CalendarEventLink.
     */
    data: XOR<CalendarEventLinkCreateInput, CalendarEventLinkUncheckedCreateInput>
  }

  /**
   * CalendarEventLink createMany
   */
  export type CalendarEventLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarEventLinks.
     */
    data: CalendarEventLinkCreateManyInput | CalendarEventLinkCreateManyInput[]
  }

  /**
   * CalendarEventLink createManyAndReturn
   */
  export type CalendarEventLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarEventLinks.
     */
    data: CalendarEventLinkCreateManyInput | CalendarEventLinkCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEventLink update
   */
  export type CalendarEventLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a CalendarEventLink.
     */
    data: XOR<CalendarEventLinkUpdateInput, CalendarEventLinkUncheckedUpdateInput>
    /**
     * Choose, which CalendarEventLink to update.
     */
    where: CalendarEventLinkWhereUniqueInput
  }

  /**
   * CalendarEventLink updateMany
   */
  export type CalendarEventLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarEventLinks.
     */
    data: XOR<CalendarEventLinkUpdateManyMutationInput, CalendarEventLinkUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEventLinks to update
     */
    where?: CalendarEventLinkWhereInput
    /**
     * Limit how many CalendarEventLinks to update.
     */
    limit?: number
  }

  /**
   * CalendarEventLink updateManyAndReturn
   */
  export type CalendarEventLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * The data used to update CalendarEventLinks.
     */
    data: XOR<CalendarEventLinkUpdateManyMutationInput, CalendarEventLinkUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEventLinks to update
     */
    where?: CalendarEventLinkWhereInput
    /**
     * Limit how many CalendarEventLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEventLink upsert
   */
  export type CalendarEventLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the CalendarEventLink to update in case it exists.
     */
    where: CalendarEventLinkWhereUniqueInput
    /**
     * In case the CalendarEventLink found by the `where` argument doesn't exist, create a new CalendarEventLink with this data.
     */
    create: XOR<CalendarEventLinkCreateInput, CalendarEventLinkUncheckedCreateInput>
    /**
     * In case the CalendarEventLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarEventLinkUpdateInput, CalendarEventLinkUncheckedUpdateInput>
  }

  /**
   * CalendarEventLink delete
   */
  export type CalendarEventLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
    /**
     * Filter which CalendarEventLink to delete.
     */
    where: CalendarEventLinkWhereUniqueInput
  }

  /**
   * CalendarEventLink deleteMany
   */
  export type CalendarEventLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEventLinks to delete
     */
    where?: CalendarEventLinkWhereInput
    /**
     * Limit how many CalendarEventLinks to delete.
     */
    limit?: number
  }

  /**
   * CalendarEventLink without action
   */
  export type CalendarEventLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventLink
     */
    select?: CalendarEventLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEventLink
     */
    omit?: CalendarEventLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventLinkInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GoogleCredentialScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    expiryDate: 'expiryDate',
    scope: 'scope',
    tokenType: 'tokenType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoogleCredentialScalarFieldEnum = (typeof GoogleCredentialScalarFieldEnum)[keyof typeof GoogleCredentialScalarFieldEnum]


  export const CalendarEventLinkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchId: 'matchId',
    googleEventId: 'googleEventId',
    status: 'status',
    errorCode: 'errorCode',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CalendarEventLinkScalarFieldEnum = (typeof CalendarEventLinkScalarFieldEnum)[keyof typeof CalendarEventLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'CalendarLinkStatus'
   */
  export type EnumCalendarLinkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CalendarLinkStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    googleCredential?: XOR<GoogleCredentialNullableScalarRelationFilter, GoogleCredentialWhereInput> | null
    calendarLinks?: CalendarEventLinkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleCredential?: GoogleCredentialOrderByWithRelationInput
    calendarLinks?: CalendarEventLinkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    googleCredential?: XOR<GoogleCredentialNullableScalarRelationFilter, GoogleCredentialWhereInput> | null
    calendarLinks?: CalendarEventLinkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GoogleCredentialWhereInput = {
    AND?: GoogleCredentialWhereInput | GoogleCredentialWhereInput[]
    OR?: GoogleCredentialWhereInput[]
    NOT?: GoogleCredentialWhereInput | GoogleCredentialWhereInput[]
    id?: StringFilter<"GoogleCredential"> | string
    userId?: StringFilter<"GoogleCredential"> | string
    accessToken?: StringFilter<"GoogleCredential"> | string
    refreshToken?: StringFilter<"GoogleCredential"> | string
    expiryDate?: DateTimeFilter<"GoogleCredential"> | Date | string
    scope?: StringNullableFilter<"GoogleCredential"> | string | null
    tokenType?: StringFilter<"GoogleCredential"> | string
    createdAt?: DateTimeFilter<"GoogleCredential"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleCredential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoogleCredentialOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiryDate?: SortOrder
    scope?: SortOrderInput | SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoogleCredentialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: GoogleCredentialWhereInput | GoogleCredentialWhereInput[]
    OR?: GoogleCredentialWhereInput[]
    NOT?: GoogleCredentialWhereInput | GoogleCredentialWhereInput[]
    accessToken?: StringFilter<"GoogleCredential"> | string
    refreshToken?: StringFilter<"GoogleCredential"> | string
    expiryDate?: DateTimeFilter<"GoogleCredential"> | Date | string
    scope?: StringNullableFilter<"GoogleCredential"> | string | null
    tokenType?: StringFilter<"GoogleCredential"> | string
    createdAt?: DateTimeFilter<"GoogleCredential"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleCredential"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type GoogleCredentialOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiryDate?: SortOrder
    scope?: SortOrderInput | SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoogleCredentialCountOrderByAggregateInput
    _max?: GoogleCredentialMaxOrderByAggregateInput
    _min?: GoogleCredentialMinOrderByAggregateInput
  }

  export type GoogleCredentialScalarWhereWithAggregatesInput = {
    AND?: GoogleCredentialScalarWhereWithAggregatesInput | GoogleCredentialScalarWhereWithAggregatesInput[]
    OR?: GoogleCredentialScalarWhereWithAggregatesInput[]
    NOT?: GoogleCredentialScalarWhereWithAggregatesInput | GoogleCredentialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoogleCredential"> | string
    userId?: StringWithAggregatesFilter<"GoogleCredential"> | string
    accessToken?: StringWithAggregatesFilter<"GoogleCredential"> | string
    refreshToken?: StringWithAggregatesFilter<"GoogleCredential"> | string
    expiryDate?: DateTimeWithAggregatesFilter<"GoogleCredential"> | Date | string
    scope?: StringNullableWithAggregatesFilter<"GoogleCredential"> | string | null
    tokenType?: StringWithAggregatesFilter<"GoogleCredential"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GoogleCredential"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoogleCredential"> | Date | string
  }

  export type CalendarEventLinkWhereInput = {
    AND?: CalendarEventLinkWhereInput | CalendarEventLinkWhereInput[]
    OR?: CalendarEventLinkWhereInput[]
    NOT?: CalendarEventLinkWhereInput | CalendarEventLinkWhereInput[]
    id?: StringFilter<"CalendarEventLink"> | string
    userId?: StringFilter<"CalendarEventLink"> | string
    matchId?: IntFilter<"CalendarEventLink"> | number
    googleEventId?: StringNullableFilter<"CalendarEventLink"> | string | null
    status?: EnumCalendarLinkStatusFilter<"CalendarEventLink"> | $Enums.CalendarLinkStatus
    errorCode?: StringNullableFilter<"CalendarEventLink"> | string | null
    errorMessage?: StringNullableFilter<"CalendarEventLink"> | string | null
    createdAt?: DateTimeFilter<"CalendarEventLink"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarEventLink"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CalendarEventLinkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CalendarEventLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_matchId?: CalendarEventLinkUserIdMatchIdCompoundUniqueInput
    AND?: CalendarEventLinkWhereInput | CalendarEventLinkWhereInput[]
    OR?: CalendarEventLinkWhereInput[]
    NOT?: CalendarEventLinkWhereInput | CalendarEventLinkWhereInput[]
    userId?: StringFilter<"CalendarEventLink"> | string
    matchId?: IntFilter<"CalendarEventLink"> | number
    googleEventId?: StringNullableFilter<"CalendarEventLink"> | string | null
    status?: EnumCalendarLinkStatusFilter<"CalendarEventLink"> | $Enums.CalendarLinkStatus
    errorCode?: StringNullableFilter<"CalendarEventLink"> | string | null
    errorMessage?: StringNullableFilter<"CalendarEventLink"> | string | null
    createdAt?: DateTimeFilter<"CalendarEventLink"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarEventLink"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_matchId">

  export type CalendarEventLinkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    status?: SortOrder
    errorCode?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CalendarEventLinkCountOrderByAggregateInput
    _avg?: CalendarEventLinkAvgOrderByAggregateInput
    _max?: CalendarEventLinkMaxOrderByAggregateInput
    _min?: CalendarEventLinkMinOrderByAggregateInput
    _sum?: CalendarEventLinkSumOrderByAggregateInput
  }

  export type CalendarEventLinkScalarWhereWithAggregatesInput = {
    AND?: CalendarEventLinkScalarWhereWithAggregatesInput | CalendarEventLinkScalarWhereWithAggregatesInput[]
    OR?: CalendarEventLinkScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventLinkScalarWhereWithAggregatesInput | CalendarEventLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarEventLink"> | string
    userId?: StringWithAggregatesFilter<"CalendarEventLink"> | string
    matchId?: IntWithAggregatesFilter<"CalendarEventLink"> | number
    googleEventId?: StringNullableWithAggregatesFilter<"CalendarEventLink"> | string | null
    status?: EnumCalendarLinkStatusWithAggregatesFilter<"CalendarEventLink"> | $Enums.CalendarLinkStatus
    errorCode?: StringNullableWithAggregatesFilter<"CalendarEventLink"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"CalendarEventLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CalendarEventLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CalendarEventLink"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleCredential?: GoogleCredentialCreateNestedOneWithoutUserInput
    calendarLinks?: CalendarEventLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleCredential?: GoogleCredentialUncheckedCreateNestedOneWithoutUserInput
    calendarLinks?: CalendarEventLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleCredential?: GoogleCredentialUpdateOneWithoutUserNestedInput
    calendarLinks?: CalendarEventLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleCredential?: GoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
    calendarLinks?: CalendarEventLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleCredentialCreateInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiryDate: Date | string
    scope?: string | null
    tokenType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoogleCredentialInput
  }

  export type GoogleCredentialUncheckedCreateInput = {
    id?: string
    userId: string
    accessToken: string
    refreshToken: string
    expiryDate: Date | string
    scope?: string | null
    tokenType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleCredentialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoogleCredentialNestedInput
  }

  export type GoogleCredentialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleCredentialCreateManyInput = {
    id?: string
    userId: string
    accessToken: string
    refreshToken: string
    expiryDate: Date | string
    scope?: string | null
    tokenType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleCredentialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleCredentialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventLinkCreateInput = {
    id?: string
    matchId: number
    googleEventId?: string | null
    status?: $Enums.CalendarLinkStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCalendarLinksInput
  }

  export type CalendarEventLinkUncheckedCreateInput = {
    id?: string
    userId: string
    matchId: number
    googleEventId?: string | null
    status?: $Enums.CalendarLinkStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCalendarLinksNestedInput
  }

  export type CalendarEventLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventLinkCreateManyInput = {
    id?: string
    userId: string
    matchId: number
    googleEventId?: string | null
    status?: $Enums.CalendarLinkStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GoogleCredentialNullableScalarRelationFilter = {
    is?: GoogleCredentialWhereInput | null
    isNot?: GoogleCredentialWhereInput | null
  }

  export type CalendarEventLinkListRelationFilter = {
    every?: CalendarEventLinkWhereInput
    some?: CalendarEventLinkWhereInput
    none?: CalendarEventLinkWhereInput
  }

  export type CalendarEventLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GoogleCredentialCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiryDate?: SortOrder
    scope?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleCredentialMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiryDate?: SortOrder
    scope?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleCredentialMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiryDate?: SortOrder
    scope?: SortOrder
    tokenType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCalendarLinkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarLinkStatus | EnumCalendarLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarLinkStatus[]
    notIn?: $Enums.CalendarLinkStatus[]
    not?: NestedEnumCalendarLinkStatusFilter<$PrismaModel> | $Enums.CalendarLinkStatus
  }

  export type CalendarEventLinkUserIdMatchIdCompoundUniqueInput = {
    userId: string
    matchId: number
  }

  export type CalendarEventLinkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    googleEventId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarEventLinkAvgOrderByAggregateInput = {
    matchId?: SortOrder
  }

  export type CalendarEventLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    googleEventId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarEventLinkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    googleEventId?: SortOrder
    status?: SortOrder
    errorCode?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CalendarEventLinkSumOrderByAggregateInput = {
    matchId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumCalendarLinkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarLinkStatus | EnumCalendarLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarLinkStatus[]
    notIn?: $Enums.CalendarLinkStatus[]
    not?: NestedEnumCalendarLinkStatusWithAggregatesFilter<$PrismaModel> | $Enums.CalendarLinkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCalendarLinkStatusFilter<$PrismaModel>
    _max?: NestedEnumCalendarLinkStatusFilter<$PrismaModel>
  }

  export type GoogleCredentialCreateNestedOneWithoutUserInput = {
    create?: XOR<GoogleCredentialCreateWithoutUserInput, GoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoogleCredentialCreateOrConnectWithoutUserInput
    connect?: GoogleCredentialWhereUniqueInput
  }

  export type CalendarEventLinkCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarEventLinkCreateWithoutUserInput, CalendarEventLinkUncheckedCreateWithoutUserInput> | CalendarEventLinkCreateWithoutUserInput[] | CalendarEventLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventLinkCreateOrConnectWithoutUserInput | CalendarEventLinkCreateOrConnectWithoutUserInput[]
    createMany?: CalendarEventLinkCreateManyUserInputEnvelope
    connect?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
  }

  export type GoogleCredentialUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GoogleCredentialCreateWithoutUserInput, GoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoogleCredentialCreateOrConnectWithoutUserInput
    connect?: GoogleCredentialWhereUniqueInput
  }

  export type CalendarEventLinkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CalendarEventLinkCreateWithoutUserInput, CalendarEventLinkUncheckedCreateWithoutUserInput> | CalendarEventLinkCreateWithoutUserInput[] | CalendarEventLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventLinkCreateOrConnectWithoutUserInput | CalendarEventLinkCreateOrConnectWithoutUserInput[]
    createMany?: CalendarEventLinkCreateManyUserInputEnvelope
    connect?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GoogleCredentialUpdateOneWithoutUserNestedInput = {
    create?: XOR<GoogleCredentialCreateWithoutUserInput, GoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoogleCredentialCreateOrConnectWithoutUserInput
    upsert?: GoogleCredentialUpsertWithoutUserInput
    disconnect?: GoogleCredentialWhereInput | boolean
    delete?: GoogleCredentialWhereInput | boolean
    connect?: GoogleCredentialWhereUniqueInput
    update?: XOR<XOR<GoogleCredentialUpdateToOneWithWhereWithoutUserInput, GoogleCredentialUpdateWithoutUserInput>, GoogleCredentialUncheckedUpdateWithoutUserInput>
  }

  export type CalendarEventLinkUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarEventLinkCreateWithoutUserInput, CalendarEventLinkUncheckedCreateWithoutUserInput> | CalendarEventLinkCreateWithoutUserInput[] | CalendarEventLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventLinkCreateOrConnectWithoutUserInput | CalendarEventLinkCreateOrConnectWithoutUserInput[]
    upsert?: CalendarEventLinkUpsertWithWhereUniqueWithoutUserInput | CalendarEventLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarEventLinkCreateManyUserInputEnvelope
    set?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    disconnect?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    delete?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    connect?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    update?: CalendarEventLinkUpdateWithWhereUniqueWithoutUserInput | CalendarEventLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarEventLinkUpdateManyWithWhereWithoutUserInput | CalendarEventLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarEventLinkScalarWhereInput | CalendarEventLinkScalarWhereInput[]
  }

  export type GoogleCredentialUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GoogleCredentialCreateWithoutUserInput, GoogleCredentialUncheckedCreateWithoutUserInput>
    connectOrCreate?: GoogleCredentialCreateOrConnectWithoutUserInput
    upsert?: GoogleCredentialUpsertWithoutUserInput
    disconnect?: GoogleCredentialWhereInput | boolean
    delete?: GoogleCredentialWhereInput | boolean
    connect?: GoogleCredentialWhereUniqueInput
    update?: XOR<XOR<GoogleCredentialUpdateToOneWithWhereWithoutUserInput, GoogleCredentialUpdateWithoutUserInput>, GoogleCredentialUncheckedUpdateWithoutUserInput>
  }

  export type CalendarEventLinkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CalendarEventLinkCreateWithoutUserInput, CalendarEventLinkUncheckedCreateWithoutUserInput> | CalendarEventLinkCreateWithoutUserInput[] | CalendarEventLinkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CalendarEventLinkCreateOrConnectWithoutUserInput | CalendarEventLinkCreateOrConnectWithoutUserInput[]
    upsert?: CalendarEventLinkUpsertWithWhereUniqueWithoutUserInput | CalendarEventLinkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CalendarEventLinkCreateManyUserInputEnvelope
    set?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    disconnect?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    delete?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    connect?: CalendarEventLinkWhereUniqueInput | CalendarEventLinkWhereUniqueInput[]
    update?: CalendarEventLinkUpdateWithWhereUniqueWithoutUserInput | CalendarEventLinkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CalendarEventLinkUpdateManyWithWhereWithoutUserInput | CalendarEventLinkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CalendarEventLinkScalarWhereInput | CalendarEventLinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoogleCredentialInput = {
    create?: XOR<UserCreateWithoutGoogleCredentialInput, UserUncheckedCreateWithoutGoogleCredentialInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoogleCredentialInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutGoogleCredentialNestedInput = {
    create?: XOR<UserCreateWithoutGoogleCredentialInput, UserUncheckedCreateWithoutGoogleCredentialInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoogleCredentialInput
    upsert?: UserUpsertWithoutGoogleCredentialInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoogleCredentialInput, UserUpdateWithoutGoogleCredentialInput>, UserUncheckedUpdateWithoutGoogleCredentialInput>
  }

  export type UserCreateNestedOneWithoutCalendarLinksInput = {
    create?: XOR<UserCreateWithoutCalendarLinksInput, UserUncheckedCreateWithoutCalendarLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarLinksInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCalendarLinkStatusFieldUpdateOperationsInput = {
    set?: $Enums.CalendarLinkStatus
  }

  export type UserUpdateOneRequiredWithoutCalendarLinksNestedInput = {
    create?: XOR<UserCreateWithoutCalendarLinksInput, UserUncheckedCreateWithoutCalendarLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarLinksInput
    upsert?: UserUpsertWithoutCalendarLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarLinksInput, UserUpdateWithoutCalendarLinksInput>, UserUncheckedUpdateWithoutCalendarLinksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCalendarLinkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarLinkStatus | EnumCalendarLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarLinkStatus[]
    notIn?: $Enums.CalendarLinkStatus[]
    not?: NestedEnumCalendarLinkStatusFilter<$PrismaModel> | $Enums.CalendarLinkStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCalendarLinkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CalendarLinkStatus | EnumCalendarLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CalendarLinkStatus[]
    notIn?: $Enums.CalendarLinkStatus[]
    not?: NestedEnumCalendarLinkStatusWithAggregatesFilter<$PrismaModel> | $Enums.CalendarLinkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCalendarLinkStatusFilter<$PrismaModel>
    _max?: NestedEnumCalendarLinkStatusFilter<$PrismaModel>
  }

  export type GoogleCredentialCreateWithoutUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiryDate: Date | string
    scope?: string | null
    tokenType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleCredentialUncheckedCreateWithoutUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    expiryDate: Date | string
    scope?: string | null
    tokenType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleCredentialCreateOrConnectWithoutUserInput = {
    where: GoogleCredentialWhereUniqueInput
    create: XOR<GoogleCredentialCreateWithoutUserInput, GoogleCredentialUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventLinkCreateWithoutUserInput = {
    id?: string
    matchId: number
    googleEventId?: string | null
    status?: $Enums.CalendarLinkStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventLinkUncheckedCreateWithoutUserInput = {
    id?: string
    matchId: number
    googleEventId?: string | null
    status?: $Enums.CalendarLinkStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventLinkCreateOrConnectWithoutUserInput = {
    where: CalendarEventLinkWhereUniqueInput
    create: XOR<CalendarEventLinkCreateWithoutUserInput, CalendarEventLinkUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventLinkCreateManyUserInputEnvelope = {
    data: CalendarEventLinkCreateManyUserInput | CalendarEventLinkCreateManyUserInput[]
  }

  export type GoogleCredentialUpsertWithoutUserInput = {
    update: XOR<GoogleCredentialUpdateWithoutUserInput, GoogleCredentialUncheckedUpdateWithoutUserInput>
    create: XOR<GoogleCredentialCreateWithoutUserInput, GoogleCredentialUncheckedCreateWithoutUserInput>
    where?: GoogleCredentialWhereInput
  }

  export type GoogleCredentialUpdateToOneWithWhereWithoutUserInput = {
    where?: GoogleCredentialWhereInput
    data: XOR<GoogleCredentialUpdateWithoutUserInput, GoogleCredentialUncheckedUpdateWithoutUserInput>
  }

  export type GoogleCredentialUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleCredentialUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    tokenType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventLinkUpsertWithWhereUniqueWithoutUserInput = {
    where: CalendarEventLinkWhereUniqueInput
    update: XOR<CalendarEventLinkUpdateWithoutUserInput, CalendarEventLinkUncheckedUpdateWithoutUserInput>
    create: XOR<CalendarEventLinkCreateWithoutUserInput, CalendarEventLinkUncheckedCreateWithoutUserInput>
  }

  export type CalendarEventLinkUpdateWithWhereUniqueWithoutUserInput = {
    where: CalendarEventLinkWhereUniqueInput
    data: XOR<CalendarEventLinkUpdateWithoutUserInput, CalendarEventLinkUncheckedUpdateWithoutUserInput>
  }

  export type CalendarEventLinkUpdateManyWithWhereWithoutUserInput = {
    where: CalendarEventLinkScalarWhereInput
    data: XOR<CalendarEventLinkUpdateManyMutationInput, CalendarEventLinkUncheckedUpdateManyWithoutUserInput>
  }

  export type CalendarEventLinkScalarWhereInput = {
    AND?: CalendarEventLinkScalarWhereInput | CalendarEventLinkScalarWhereInput[]
    OR?: CalendarEventLinkScalarWhereInput[]
    NOT?: CalendarEventLinkScalarWhereInput | CalendarEventLinkScalarWhereInput[]
    id?: StringFilter<"CalendarEventLink"> | string
    userId?: StringFilter<"CalendarEventLink"> | string
    matchId?: IntFilter<"CalendarEventLink"> | number
    googleEventId?: StringNullableFilter<"CalendarEventLink"> | string | null
    status?: EnumCalendarLinkStatusFilter<"CalendarEventLink"> | $Enums.CalendarLinkStatus
    errorCode?: StringNullableFilter<"CalendarEventLink"> | string | null
    errorMessage?: StringNullableFilter<"CalendarEventLink"> | string | null
    createdAt?: DateTimeFilter<"CalendarEventLink"> | Date | string
    updatedAt?: DateTimeFilter<"CalendarEventLink"> | Date | string
  }

  export type UserCreateWithoutGoogleCredentialInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calendarLinks?: CalendarEventLinkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoogleCredentialInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    calendarLinks?: CalendarEventLinkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoogleCredentialInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoogleCredentialInput, UserUncheckedCreateWithoutGoogleCredentialInput>
  }

  export type UserUpsertWithoutGoogleCredentialInput = {
    update: XOR<UserUpdateWithoutGoogleCredentialInput, UserUncheckedUpdateWithoutGoogleCredentialInput>
    create: XOR<UserCreateWithoutGoogleCredentialInput, UserUncheckedCreateWithoutGoogleCredentialInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoogleCredentialInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoogleCredentialInput, UserUncheckedUpdateWithoutGoogleCredentialInput>
  }

  export type UserUpdateWithoutGoogleCredentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarLinks?: CalendarEventLinkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoogleCredentialInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarLinks?: CalendarEventLinkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCalendarLinksInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleCredential?: GoogleCredentialCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCalendarLinksInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    googleCredential?: GoogleCredentialUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCalendarLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarLinksInput, UserUncheckedCreateWithoutCalendarLinksInput>
  }

  export type UserUpsertWithoutCalendarLinksInput = {
    update: XOR<UserUpdateWithoutCalendarLinksInput, UserUncheckedUpdateWithoutCalendarLinksInput>
    create: XOR<UserCreateWithoutCalendarLinksInput, UserUncheckedCreateWithoutCalendarLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarLinksInput, UserUncheckedUpdateWithoutCalendarLinksInput>
  }

  export type UserUpdateWithoutCalendarLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleCredential?: GoogleCredentialUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    googleCredential?: GoogleCredentialUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CalendarEventLinkCreateManyUserInput = {
    id?: string
    matchId: number
    googleEventId?: string | null
    status?: $Enums.CalendarLinkStatus
    errorCode?: string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CalendarEventLinkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventLinkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventLinkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: IntFieldUpdateOperationsInput | number
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCalendarLinkStatusFieldUpdateOperationsInput | $Enums.CalendarLinkStatus
    errorCode?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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