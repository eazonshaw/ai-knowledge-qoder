---
title: "Project Valhalla's First Preview: JEP 401 Redefines == for Java Objects"
date: 2026-08-11 06:27:34
categories:
  - AI 新闻
  - InfoQ (EN)
tags:
  - AI
  - InfoQ (EN)
excerpt: "JEP 401(https://openjdk.org/jeps/401), Value Objects (Preview), has been integrated into JDK 28. It "
source_url: "https://www.infoq.com/news/2026/08/jep401-value-objects-preview/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global"
---
> 来源：InfoQ (EN)　|　原发布：2026-08-10T14:32:00.000Z　|　采集：2026-08-11 06:27:34

## 正文

[JEP 401](https://openjdk.org/jeps/401), Value Objects (Preview), has been integrated into JDK 28**.** It introduces identity-free class instances with only final fields, changes how **`==`** behaves for those objects, and opens the door to flatter, allocation-free JVM representations. The preview is disabled by default and requires it **`--enable-preview`** at both compile time and run time.

For developers, the immediate consequences are a new **`value`** modifier, stricter construction rules, restrictions on synchronization, and migration effects for several value-based JDK classes. The proposal has been shaped by years of discussion on OpenJDK's [valhalla-dev](https://mail.openjdk.org/mailman/listinfo/valhalla-dev) mailing list.

A class declared with the **`value`** modifier is a value class; every other class remains an identity class. Its instance fields are implicitly final, and every field must be assigned before the new instance can be observed.

```
value class Point {
   private int x; // implicitly final
   private int y;
   public Point(int x, int y) {
       this.x = x;   // every field assigned
       this.y = y;   // before construction completes
   }
   public int x() { return x; }
   public int y() { return y; }
}
```

Records can take the modifier too, as in **`value record Color(byte red, byte green, byte blue) { }`**. Instance methods of a value class may not be synchronized. JEP 539, Strict Field Initialization in the JVM, supplies the bytecode verification that enforces the construction rules.

The most visible semantic change is **`==`**. For identity objects, its behavior remains unchanged. For value objects, it succeeds when both operands are instances of the same class with the same field values; reference-typed fields are compared recursively using **`==`**.

```
Point p1 = new Point(3, 4);
Point p2 = new Point(3, 4);
assert p1 == p2;   // true: same class, same field values
Object o1 = p1, o2 = p2;
assert o1 == o2;   // true: still indistinguishable as Object
String s1 = "hamburger";
String s2 = new String(s1);
assert s1 != s2;   // true: String remains an identity class
```

This is not an invitation to abandon **`equals`**. JEP 401 does not redefine **`==`** as a replacement for **`equals`**; the usual advice to compare objects using **`equals`** still applies because a value object's internal state is not always the same as the state it represents.

With preview features enabled, several value-based JDK classes, including primitive wrappers and **`LocalDate`**, become value classes. With preview disabled, the compiler continues to use its identity-object forms and behavior remains aligned with JDK 27. Code compiled with the preview enabled must also run with it enabled.

Recompilation is recommended for migrated classes because the **`LoadableDescriptors`** class-file attribute tells the JVM at load time that a class is a value class. Some APIs stop working: creating a **`Reference`** for a value object throws **`IdentityException`**, and **`javac`** extends its identity warnings to value classes in JDK 28.

The expected payoff is optimization rather than a guaranteed benchmark result. A JVM may scalarize a value object into its constituent fields or flatten it into a compact representation stored directly in a field or array element. Flattening remains constrained by atomicity; on typical platforms, the available encoding may be as small as 64 bits including a null flag. When neither optimization applies, the JVM falls back to ordinary allocation, especially during warmup before optimized JIT code is available.

JEP 401 frames the problem as a mismatch between what developers mean and what Java guarantees. Small classes representing a complex number, pixel color, or date exist to carry data, yet ordinary Java objects are defined by identity: every constructor call produces something distinguishable from every other object. For such types, the JEP argues, identity is often irrelevant and can be harmful.

Identity also carries a run-time cost. It generally requires the JVM to allocate memory for each object and dereference that location on every use, increasing garbage-collector pressure and degrading locality. Escape analysis recovers some of that cost, but its optimizations are unpredictable and do not help once an object escapes, including when it is stored in a field or array.

The JEP acknowledges that value objects make significant changes to Java's object model. Developers may be surprised by the new behavior of **`==`** and **`synchronized`**, although the proposal expects such disruptions to be uncommon and manageable. The **`if_acmpeq`** bytecode also gains an additional value-object check, with the identity case intended to remain a fast path.

The document identifies two security considerations: **`==`** and **`identityHashCode`** may indirectly expose private field values, and comparing two large trees of value objects may take unbounded time.

## About the Author

#### **A N M Bazlur Rahman**

Show moreShow less


---

> 本文正文由程序自动抓取自公开网页/RSS，版权归原作者与来源站点所有；如有侵权请联系删除。原文出处：InfoQ (EN)（https://www.infoq.com/news/2026/08/jep401-value-objects-preview/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global）。