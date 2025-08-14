const { expect } = require("chai");

describe("ToDoList", function () {
  let contract;

  beforeEach(async () => {
    const Todo = await ethers.getContractFactory("Todo"); 
    contract = await Todo.deploy();
    await contract.waitForDeployment();
  });

  it("should create a task", async () => {
    const tx = await contract.createTask("Test task");
    await tx.wait(); // Ensure transaction is mined

    const task = await contract.getTask(1);
    expect(task[1]).to.equal("Test task");
    expect(task[2]).to.equal(false);
  });

  it("should create another task", async () => {
    const tx = await contract.createTask("Complete your assignment Slem!");
    await tx.wait(); // Ensure transaction is mined

    const task = await contract.getTask(1);
    expect(task[1]).to.equal("Complete your assignment Slem!");
    expect(task[2]).to.equal(false);
  });

  it("should toggle a task", async () => {
    await (await contract.createTask("Test task")).wait(); // Mine creation
    await (await contract.toggleCompleted(1)).wait(); // Mine toggle

    const task = await contract.getTask(1);
    expect(task[2]).to.equal(true);
  });

  it("should list all tasks", async () => {
    const tasksToCreate = ["Buy milk", "Read book", "Write code"];
    for (const content of tasksToCreate) {
      await (await contract.createTask(content)).wait(); // Mine each task creation
    }

    const taskCount = await contract.taskCount();
    expect(Number(taskCount)).to.equal(tasksToCreate.length);

    const allTasks = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await contract.getTask(i);
      allTasks.push({
        id: Number(task[0]),
        content: task[1],
        completed: task[2],
      });
    }

    // Print all tasks (optional)
    console.log("All tasks:", allTasks);

    // Assert the contents
    expect(allTasks[0].content).to.equal("Buy milk");
    expect(allTasks[1].content).to.equal("Read book");
    expect(allTasks[2].content).to.equal("Write code");
  });
});
