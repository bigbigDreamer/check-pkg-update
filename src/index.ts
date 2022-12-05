import { checkForLatestVersion } from './helper'
import semver from 'semver';
export async function checkNeedUpdate(pkgName: string, currentVersion: string): Promise<boolean> {
    const remoteVersion = await checkForLatestVersion(pkgName)
    // diff current version with remoteVersion
    return semver.lt(currentVersion, remoteVersion);
}



