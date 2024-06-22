export type HeaderRouteType = {
    path: string;
    title: string;
};

// Typescript basics

// Types, Interfaces, Utility Types, Generics, Operators

// or
type StringNumberOrNull = string | null | number;
const test1: StringNumberOrNull = 1;

type Falsy = undefined | null | '' | 0;
const test2: Falsy = '';

type UserRoles = 'admin' | 'user' | 'anonim' | 'superadmin';

const getUserPermissionsByType = (permission: UserRoles) => {
    const permissions = {
        admin: 1,
        user: 1,
        anonim: 0,
        superadmin: 1,
    };

    return permissions[permission];
};

const permission: UserRoles = 'anonim';
getUserPermissionsByType(permission);

// and
// &

type DefaultUser = {
    id: string;
    name: string;
};

// union type
type AdminUser = DefaultUser & {
    isAdmin: true;
};

type UserWithDeclarations = DefaultUser & {
    decalrations: string[];
};

const user: UserWithDeclarations = {
    decalrations: [],
    id: '1',
    name: 'Igor',
};

const user1: DefaultUser = {
    id: '1',
    name: 'string',
};

const user2: AdminUser = {
    id: '2',
    name: 'string2',
    isAdmin: true,
};

// Optional types

type DataType = {
    users: string[];
    posts: string[];
    page?: number;
};

const data1: DataType = {
    users: [],
    posts: [],
    page: 1,
};

const data2: DataType = {
    users: [],
    posts: [],
};

type MyBoolean = true | false;
const value: MyBoolean = true;

interface PostInteface {
    id: string;
    title: string;
    text: string;
    liked: number;
}

interface DeletedPostInterface extends PostInteface {
    isDeleted: boolean;
}

// extends
// implements

type Str = string;

class MyClass implements PostInteface {
    id = '';
    liked = 1;
    text = '';
    title = '';
}

type A = {
    a: number;
};

type B = A & { b: number };

// & | - not works with inteface

// UTILY TYPES

type UsersData = {
    users?: string[];
    posts?: string[];
};

type RequiredType = Required<{ a?: number }>;

const saveData = (usersData: Required<UsersData>) => {
    // if (usersData.posts) {
    //     // ...
    // }
    // if (usersData.users) {
    //     // ...
    // }
};

type PostDataType = {
    title: string;
    id: string;
    likes: number;
};

const PostData: Partial<PostDataType> = {};

// Partial  - makes all the fields of the object optional
// Required - makes all the fileds of the object required

type InvoiceType = {
    address: string;
    amount: number;
    id: string;
    customer: string;
};

const word: 'hello' | 'goodbuye' = 'hello';

const mainInvoiceData: Pick<InvoiceType, 'amount' | 'customer' | 'id'> = {
    amount: 1,
    customer: '',
    id: '',
};

const mainInvoiceDataNoCustomer: Omit<InvoiceType, 'customer' | 'id'> = {
    address: '',
    amount: 10,
};

// Pick - gets couple of fields from any type
// Omit - removes couole of fileds from any type

// Завдання:
type Car = {
    price: number;
    color: string;
    name: string;
    speed: number;
};

type CarPriceOnlyType = Pick<Car, 'price'>;

const showThePrice = (carWithPriceOnly: CarPriceOnlyType) => {
    console.log(`The price of the car is ${carWithPriceOnly.price}`);
};

type CarWithSpeedAndNameType = Omit<Car, 'price' | 'color'>;

const showTheSpeed = (carWithSpeedAndName: CarWithSpeedAndNameType) => {
    console.log(
        `The speed of the car ${carWithSpeedAndName.name} is ${carWithSpeedAndName.speed}`
    );
};

// Типізувати аргументи функцій
type CoordsType = {
    x: number;
    y: number;
    z: number;
};

// Record<string, string>
const coords: Record<'x' | 'y' | 'z', number> = {
    x: 0,
    y: 0,
    z: 0
};

function main(a: number) {
    if (a > 10) {
        return 1;
    } else {
        return 0;
    }
}

// typeof "" 
// typeof 10
// typeof main


const mainResult: ReturnType<typeof main> = 0;

const first = () => 11;

const second = (firstResult: ReturnType<typeof first>) => { }

const firstResult = first();
second(firstResult);

class UserClass {
    name: string = "";
    age: number = 0;
}

new UserClass();

const aClassInstance: InstanceType<typeof UserClass> = {
    name: "",
    age: 10
}

// Generic

type Union<T1, T2> = T1 & T2;

const coordA = { a: 10 };
const coordB = { b: 11 };

type CoordAType = { a: number };
type CoordBType = { b: number };

const coordAAndB: Union<CoordAType, CoordBType> = {
    a: 1,
    b: 2
};
