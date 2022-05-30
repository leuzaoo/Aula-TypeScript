// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let text: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 20.3

// array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple -tupla- 
let title: [number, string, number, boolean]
title = [12, "foo", 3, false]

// enum 
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL UTILIZAR!!
// ele pode ser qualquer coisa, boolean, string, number, etc.
let coisa: any
coisa = [1]

// void (vazio)
function logger(): void {
    console.log('foo')
}

// null | undefined
type Bla = string | undefined

let variable: null

// never
function error(): never{
throw new Error("error");
}

// object (qualquer coisa que não seja dos tipos primitivos)
let cart: object

cart = "ola" // não pode ser, pois não é um objeto

cart = {
    key: "fi"
}