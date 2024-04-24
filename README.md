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






