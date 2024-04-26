# software-development
Este repositorio es un repositorio público que contiene información sobre el desarrollo de software, desde los patrones de diseño hasta la arquitectura de software.

## Patrones de diseño

**1. Patrón Composición:**
Permite construir objetos complejos mediante la composición de objetos más simples y así formar una estructura jerárquica.

**2. Patrón Decorador:**
Permite agregar responsabilidades adicionales a un objeto de manera dinámica. Es una alternativa flexible a la herencia para extender funcionalidad.

**3. Patrón Iterador:**
Proporciona un método para acceder secuencialmente a los elementos de una colección sin exponer su representación subyacente.

**4. Patrón Memento:**
Permite capturar y externalizar un estado interno de un objeto, de modo que el objeto pueda ser restaurado a ese estado más tarde sin violar su encapsulamiento.

**5. Patrón Observador:**
Define una relación uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus observadores son notificados y actualizados automáticamente.

**6. Patrón Proxy:**
Proporciona un substituto o placeholder para otro objeto para controlar el acceso a él o para agregar funcionalidad adicional.

**7. Patrón Estado:**
Permite que un objeto modifique su comportamiento cuando su estado interno cambia. Parece como si el objeto hubiera cambiado de clase.

**8. Patrón Estrategia:**
Permite definir una familia de algoritmos, encapsular cada uno de ellos en una clase separada y hacerlos intercambiables.

## Principios SOLID

**1. Principio de responsabilidad única**
Este principio establece que una clase debe tener una única razón para cambiar. Es decir, una clase debe tener una única responsabilidad, y todos sus métodos y atributos deben estar relacionados con esa responsabilidad.

**2. Principio de abierto/cerrado**
Este principio establece que una clase debe estar abierta para su extensión pero cerrada para su modificación. Es decir, los cambios en el comportamiento de una clase deben lograrse agregando nuevas funcionalidades en lugar de modificar el código existente.

**3. Principio de sustitución de Liskov**
Este principio establece que los objetos de una clase derivada deben poder ser sustituidos por objetos de su clase base sin afectar la integridad del programa. En otras palabras, las subclases deben ser sustituibles por sus clases base sin cambiar el comportamiento esperado del programa.

**4. Principio de segregación de interfaces**
Este principio establece que una clase no debe ser obligada a implementar interfaces que no utiliza. En lugar de eso, se deben crear interfaces específicas para cada cliente. Esto evita la creación de interfaces "gordas" que obligan a las clases a implementar métodos innecesarios.

**5. Principio de inversión de dependencias**
Este principio establece que los módulos de alto nivel no deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones. Esto promueve el desacoplamiento y facilita la extensibilidad y mantenibilidad del código.

## Patrones que cumplen con OCP y SRP

1. OCP

### Patrón de Estrategia: 
Este patrón define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Este patrón permite que el algoritmo varíe independientemente de los clientes que lo utilicen. Cumple con el OCP porque los nuevos algoritmos pueden agregarse fácilmente al sistema sin necesidad de modificar el código existente. Se extiende el comportamiento sin cambiar la clase que lo utiliza.

### Patrón de Decorador (Decorator): 
Este patrón permite agregar funcionalidades a objetos existentes dinámicamente. Cumple con el OCP porque las nuevas funcionalidades pueden agregarse a un objeto sin modificar su estructura. La clase original permanece cerrada para modificaciones, mientras que las nuevas funcionalidades pueden ser agregadas libremente.

### Patrón de Fábrica Abstracta (Abstract Factory): 
Este patrón proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Cumple con el OCP porque permite la adición de nuevas familias de productos (clases concretas) sin modificar el código que las utiliza. La interfaz de la fábrica abstracta permanece cerrada para modificaciones, pero se puede extender fácilmente mediante la introducción de nuevas implementaciones de fábrica.

### Patrón de Observador (Observer): 
Este patrón define una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente. Cumple con el OCP porque nuevos observadores pueden ser agregados al sujeto sin necesidad de modificar su código. El sujeto permanece cerrado para modificaciones, pero es abierto para la adición de nuevos observadores.Patrón de Observador (Observer): Este patrón define una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente. Cumple con el OCP porque nuevos observadores pueden ser agregados al sujeto sin necesidad de modificar su código. El sujeto permanece cerrado para modificaciones, pero es abierto para la adición de nuevos observadores.

### Patrón de Comando (Command): 
Este patrón encapsula una solicitud como un objeto, lo que le permite parametrizar clientes con operaciones, encolar solicitudes y soportar operaciones reversibles. Cumple con el OCP porque nuevos comandos pueden ser agregados al sistema sin necesidad de modificar el código existente. La invocación de comandos y su manejo permanecen cerrados para modificaciones, pero se pueden agregar nuevos comandos fácilmente.

### Patrón de Iterador (Iterator): 
Este patrón proporciona una manera de acceder secuencialmente a los elementos de una colección sin exponer su representación subyacente. Cumple con el OCP porque nuevos tipos de iteradores pueden ser introducidos sin afectar al código que utiliza la colección. La colección permanece cerrada para modificaciones, pero se pueden introducir nuevos iteradores para adaptarse a diferentes formas de recorrer la colección.

2. SRP

### Patrón de Observador (Observer): 
Este patrón permite definir una dependencia uno a muchos entre objetos de modo que cuando un objeto cambie de estado, todos sus dependientes sean notificados y actualizados automáticamente. Cumple con el SRP ya que separa las responsabilidades de la clase sujeto (que notifica cambios) de las clases observadoras (que reaccionan a los cambios). Cada clase tiene una única responsabilidad: el sujeto se encarga de notificar cambios, mientras que los observadores se encargan de reaccionar a esos cambios.

### Patrón de Decorador (Decorator): 
Este patrón permite agregar funcionalidades a objetos existentes dinámicamente. Cumple con el SRP ya que cada decorador tiene la responsabilidad de agregar una única funcionalidad específica al objeto base. Cada clase decoradora tiene una única razón para cambiar: modificar o extender el comportamiento del objeto base.

### Patrón de Estrategia (Strategy): 
Este patrón define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Cumple con el SRP ya que cada estrategia encapsula un algoritmo específico y proporciona una única forma de realizar una tarea. Cada clase de estrategia tiene una única responsabilidad: implementar un algoritmo específico.

### Patrón de Fábrica (Factory): 
Este patrón encapsula la creación de objetos y proporciona una interfaz para crear instancias de una clase, permitiendo que las subclases alteren el tipo de objetos que se crearán. Cumple con el SRP al separar la responsabilidad de la creación de objetos de las clases que los utilizan. La fábrica tiene la única responsabilidad de crear objetos, mientras que las clases cliente tienen la responsabilidad de utilizar esos objetos.

### Patrón de Builder (Constructor Virtual): 
Este patrón se utiliza para construir un objeto complejo paso a paso. Cumple con el SRP al separar la construcción del objeto de su representación, permitiendo que el mismo proceso de construcción pueda dar lugar a representaciones diferentes. Cada constructor o director tiene la responsabilidad de construir una única representación del objeto.



