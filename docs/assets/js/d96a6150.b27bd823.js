"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[16766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),p=l,h=k["".concat(c,".").concat(p)]||k[p]||d[p]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},22140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),l=(n(67294),n(3905));const r={id:"blockhound",title:"BlockHound",sidebar_label:"BlockHound",slug:"blockhound.html"},a=void 0,i={unversionedId:"extensions/blockhound",id:"version-5.7/extensions/blockhound",title:"BlockHound",description:"The Kotest BlockHound extension activates BlockHound support for coroutines. It helps to detect blocking code on non-blocking coroutine threads, e.g. when accidentally calling a blocking I/O library function on a UI thread.",source:"@site/versioned_docs/version-5.7/extensions/blockhound.md",sourceDirName:"extensions",slug:"/extensions/blockhound.html",permalink:"/docs/extensions/blockhound.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.7/extensions/blockhound.md",tags:[],version:"5.7",frontMatter:{id:"blockhound",title:"BlockHound",sidebar_label:"BlockHound",slug:"blockhound.html"},sidebar:"extensions",previous:{title:"Pitest",permalink:"/docs/extensions/pitest.html"}},c={},s=[{value:"Getting Started",id:"getting-started",level:3},{value:"Detection",id:"detection",level:3},{value:"Customization",id:"customization",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Kotest BlockHound extension activates ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reactor/BlockHound"},"BlockHound")," support for coroutines. It helps to detect blocking code on non-blocking coroutine threads, e.g. when accidentally calling a blocking I/O library function on a UI thread."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"To use this extension add the ",(0,l.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-extensions-blockhound")," module to your test compile path.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-blockhound"},(0,l.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-blockhound.svg?label=latest%20release"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-blockhound/"},(0,l.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-blockhound.svg?label=latest%20snapshot"}))),(0,l.kt)("h3",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"Register the ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHound")," extension in your test class:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class BlockHoundSpecTest : FunSpec({\n   extension(BlockHound())\n\n   test("detects for spec") {\n      blockInNonBlockingContext()\n   }\n})\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHound")," extension can also be registered per ",(0,l.kt)("a",{parentName:"p",href:"../framework/testcaseconfig.html"},"test case")," or at the ",(0,l.kt)("a",{parentName:"p",href:"../framework/project-config.html"},"project level"),"."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHound")," is enabled project-wide or spec-wide, you can disable it for an individual test:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'   test("allow blocking").config(extensions = listOf(BlockHound(BlockHoundMode.DISABLED))) {\n      blockInNonBlockingContext()\n   }\n')),(0,l.kt)("p",null,"You can also change ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHoundMode")," for a section of code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'   test("allow blocking section") {\n      // ...\n      withBlockHoundMode(BlockHoundMode.DISABLED) {\n        blockInNonBlockingContext()\n      }\n      // ...\n   }\n')),(0,l.kt)("h3",{id:"detection"},"Detection"),(0,l.kt)("p",null,"Blocking calls will be detected in coroutine threads which are expected not to block. Such threads are created by the default dispatcher as this example demonstrates:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'private suspend fun blockInNonBlockingContext() {\n   withContext(Dispatchers.Default) {\n      @Suppress("BlockingMethodInNonBlockingContext")\n      Thread.sleep(2)\n   }\n}\n')),(0,l.kt)("p",null,"The BlockHound extension will by default produce an exception like this whenever it detects a blocking call:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"reactor.blockhound.BlockingOperationError: Blocking call! java.lang.Thread.sleep\n    at io.kotest.extensions.blockhound.KotestBlockHoundIntegration.applyTo$lambda-2$lambda-1(KotestBlockHoundIntegration.kt:27)\n    at reactor.blockhound.BlockHound$Builder.lambda$install$8(BlockHound.java:427)\n    at reactor.blockhound.BlockHoundRuntime.checkBlocking(BlockHoundRuntime.java:89)\n    at java.base/java.lang.Thread.sleep(Thread.java)\n    at io.kotest.extensions.blockhound.BlockHoundTestKt$blockInNonBlockingContext$2.invokeSuspend(BlockHoundTest.kt:17)\n    at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)\n    at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:106)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:570)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:750)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:677)\n    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:664)\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"By invoking it as ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHound(BlockHoundMode.PRINT)"),", it will print detected calls and continue the test without interruption.")),(0,l.kt)("p",null,"Whenever a blocking call is detected, you can"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"replace the call with a non-blocking one (using a coroutine-aware library), or"),(0,l.kt)("li",{parentName:"ul"},"schedule the calling coroutine to run on a separate I/O thread (e.g. via ",(0,l.kt)("inlineCode",{parentName:"li"},"Dispatchers.IO"),"), or"),(0,l.kt)("li",{parentName:"ul"},"add an exception if the blocking is harmless (see below).")),(0,l.kt)("h3",{id:"customization"},"Customization"),(0,l.kt)("p",null,"To customize BlockHound, familiarize yourself with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reactor/BlockHound/blob/master/docs/README.md"},"BlockHound documentation"),"."),(0,l.kt)("p",null,"Exceptions for blocking calls considered harmless can be added via a separate ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHoundIntegration")," class like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import reactor.blockhound.BlockHound\nimport reactor.blockhound.integration.BlockHoundIntegration\n\nclass MyBlockHoundIntegration : BlockHoundIntegration {\n   override fun applyTo(builder: BlockHound.Builder): Unit = with(builder) {\n      allowBlockingCallsInside("org.slf4j.LoggerFactory", "performInitialization")\n   }\n}\n')),(0,l.kt)("p",null,"In order to allow ",(0,l.kt)("inlineCode",{parentName:"p"},"BlockHound")," to auto-detect and load the integration, add its fully qualified class name to a service provider configuration file\n",(0,l.kt)("inlineCode",{parentName:"p"},"resources/META-INF/services/reactor.blockhound.integration.BlockHoundIntegration"),"."))}d.isMDXComponent=!0}}]);