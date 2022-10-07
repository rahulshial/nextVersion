# nextVersion

## Description
### Semantic Versions

You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

**For example**
```
nextVersion("1.2.3") === "1.2.4";
nextVersion("0.9.9") === "1.0.0";
nextVersion("1") === "2";
nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
nextVersion("9.9") === “10.0";
```

**Rules**

No number but the first may be greater than 9: if any are, you must set them to 0 and increment the next number in sequence.
You can assume all tests inputs to be valid.

---

The nextVersion module can be called by passing the current version number in string format as a parameter. If no value is passed, the function will return undefined.

---
Clone the repo, and install using `yarn install`

Testing: `yarn test`

Usage: Copy the nextVersion.ts to your project for your use.
