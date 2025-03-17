/// <reference path="simple_factory.ts" />
namespace SimpleFactoryPattern {
    export namespace Demo {
        export function show(): void {
            const a = ProxyPattern.SimpleFactory.createProduct('A')
            const b = ProxyPattern.SimpleFactory.createProduct('B')
            console.log(a?.method())
            console.log(b?.method())
        }
    }
}

