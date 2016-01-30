import { test } from 'qunit';
import moduleForAcceptance from 'kanban-board/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | assignment');

test('unassigned items are grouped together', function(assert) {
  visit('/');
  andThen(function() {
    var unassigned = find(".unassigned .cards");
    assert.equal(unassigned.length, 3);
    var project = find(".unassigned .cards:eq(0) .todo-project");
    assert.equal(project.text(), "first");
  });
});

test('assigned items are grouped together', function(assert) {
  visit('/');
  andThen(function() {
    var assigned = find(".assigned .cards");
    assert.equal(assigned.length, 1);
    var project = find(".assigned .cards:eq(0) .todo-project");
    assert.equal(project.text(), "last");
  });
});

test("status is shown in plain english", function(assert) {
  visit('/');
  andThen(function() {
    var status = find(".assigned .cards:eq(0) .todo-status");
    assert.equal(status.text(), "Assigned");
  });
})
