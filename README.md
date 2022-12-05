# check-pkg-update

> **Background**
>   
> Some open-source `cli tool` maybe need auto check that whether it need update the latest version when `exec` some commands. 

## Install 

```bash
# recommend
pnpm i @montagejs/check-pkg-update

# or you can use npm / yarn
# npm i @montagejs/check-pkg-update
```

## Usage

```ts
import { checkNeedUpdate } from '@montagejs/check-pkg-update'

checkNeedUpdate('create-react-app', '1.0.0')
    .then(res => {
        console.log(res, "pkg need update");
    })

```
*shell output*
```bash
# true need update
```

## API

**checkNeedUpdate**

```ts
export declare function checkNeedUpdate(pkgName: string, currentVersion: string): Promise<boolean>;
```

## Related

- [registry-url](https://www.npmjs.com/package/registry-url)
- [semver](https://www.npmjs.com/package/semver)
- [undici](https://github.com/nodejs/undici)

## LICENSE

[MIT](./LICENSE)
