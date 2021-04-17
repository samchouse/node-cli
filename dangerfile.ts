import { warn, danger } from 'danger';

const snapshots = danger.git.fileMatch('src/__tests__/__snapshots__/*');

if (snapshots.edited) {
  warn(
    'You have changed a snapshot file. Are you sure this is what you want to do? This can break tests.'
  );
}
