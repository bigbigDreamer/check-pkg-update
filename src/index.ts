import semver from 'semver';
import {checkForLatestVersion} from './helper';

export async function checkNeedUpdate(pkgName: string, currentVersion: string): Promise<boolean> {
    const remoteVersion = await checkForLatestVersion(pkgName);
    // Diff current version with remoteVersion
    return semver.lt(currentVersion, remoteVersion);
}

