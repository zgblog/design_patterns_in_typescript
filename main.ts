/// <reference path="singleton/demo.ts" />
/// <reference path="simple_factory/demo.ts" />
/// <reference path="abstract_factory/demo.ts" />
/// <reference path="factory_method/demo.ts" />
/// <reference path="builder/demo.ts" />
/// <reference path="prototype/demo.ts" />
/// <reference path="adapter/demo.ts" />
/// <reference path="bridge/demo.ts" />
/// <reference path="composite/demo.ts" />
/// <reference path="decorator/demo.ts" />
/// <reference path="facade/demo.ts" />
/// <reference path="flyweight/demo.ts" />
/// <reference path="proxy/demo.ts" />
/// <reference path="chain_of_responsibility/demo.ts" />
/// <reference path="command/demo.ts" />
/// <reference path="interpreter/demo.ts" />
/// <reference path="iterator/demo.ts" />
/// <reference path="mediator/demo.ts" />
/// <reference path="memento/demo.ts" />
/// <reference path="observer/demo.ts" />
/// <reference path="state/demo.ts" />
/// <reference path="strategy/demo.ts" />
/// <reference path="template_method/demo.ts" />
/// <reference path="visitor/demo.ts" />
//
//
declare var require: (moduleId: string) => any;
declare var process: any;

var readline = require('readline');

namespace Patterns {


	function printMenu(): void {
		var menu = "= Creational Patterns == \n" +
			"  1: Singleton \n" +
			"  2: Simple factory\n\n" +
			"  3: Abstract factory \n" +
			"  4: Factory method \n" +
			"  5: Builder \n" +
			"  6: Prototype \n\n" +
			"= Structural Patterns == \n" +
			"  7: Adapter \n" +
			"  8: Bridge \n" +
			"  9: Composite \n" +
			"  10: Decorator \n" +
			" 11: Facade \n" +
			" 12: Flyweight \n" +
			" 13: Proxy \n\n" +
			"= Behavioral Patterns == \n" +
			" 14: Chain of responsibility \n" +
			" 15: Command \n" +
			" 16: Interpreter \n" +
			" 17: Iterator \n" +
			" 18: Mediator \n" +
			" 19: Memento \n" +
			" 20: Observer \n" +
			" 21: State \n" +
			" 22: Strategy \n" +
			" 23: Template method \n" +
			" 24: Visitor \n";


		console.log("\n\n");
		console.log("==== Choose one pattern to demonstrate ====");
		console.log("\n");
		console.log(menu);
	}

	export function menu(): void {
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		printMenu();
		rl.question("Which pattern would you like to check?   ", function (answer) {
			switch (+answer) {
				case 1: show(SingletonPattern); break;
				case 2: show(SimpleFactoryPattern); break
				case 3: show(AbstractFactoryPattern); break;
				case 4: show(FactoryMethodPattern); break;
				case 5: show(BuilderPattern); break;
				case 6: show(PrototypePattern); break;
				case 7: show(AdapterPattern); break;
				case 8: show(BridgePattern); break;
				case 9: show(CompositePattern); break;
				case 10: show(DecoratorPattern); break;
				case 11: show(FacadePattern); break;
				case 12: show(FlyweightPattern); break;
				case 13: show(ProxyPattern); break;
				case 14: show(ChainOfResponsibilityPattern); break;
				case 15: show(CommandPattern); break;
				case 16: show(InterpreterPattern); break;
				case 17: show(IteratorPattern); break;
				case 18: show(MediatorPattern); break;
				case 19: show(MementoPattern); break;
				case 20: show(ObserverPattern); break;
				case 21: show(StatePattern); break;
				case 22: show(StrategyPattern); break;
				case 23: show(TemplateMethodPattern); break;
				case 24: show(VisitorPattern); break;
				default: break;
			}
			rl.close();
		});
	}

	function show(Pattern: any): void {
		Pattern.Demo.show();
	}
}

Patterns.menu();
