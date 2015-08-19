# api schemas
[![GitHub version](https://badge.fury.io/gh/appirio-tech%2Fapi-schemas.svg)](http://badge.fury.io/gh/appirio-tech%2Fapi-schemas)

[![Build Status](https://travis-ci.org/appirio-tech/api-schemas.svg?branch=master)](https://travis-ci.org/appirio-tech/api-schemas)

[![Coverage Status](https://coveralls.io/repos/appirio-tech/api-schemas/badge.svg?branch=DEM-1052&service=github)](https://coveralls.io/github/appirio-tech/api-schemas?branch=DEM-1052)

[![Dependency Status](https://www.versioneye.com/user/projects/55d4b5156dbe17001b000001/badge.svg?style=flat)](https://www.versioneye.com/user/projects/55d4b5156dbe17001b000001)

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