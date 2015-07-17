# api schemas

A central resource for JSON schemas used to mock our frontend apps.

## Using

### Bower

Add:

```
  "devDependencies": {
    "appirio-tech-api-schemas": "git@github.com:appirio-tech/api-schemas#2.x.x"
  }
```
to your ``bower.json``. Then run:

```
> bower install
```

## Updating

### Getting started

```
> npm install
```

### Adding new schemas

The single source of truth for all topcoder APIs is [Apiary](https://apiary.io/). APIs you want in JSON format here must be added to the array in ``resources.js``.

### Syncing schemas

From the root directory of this repo run:

```
> node update
```

This may pull down changes to schemas other than the one you were intending. **Please do commit these changes**, as we have no other way of keeping this repo up to date with Apiary.