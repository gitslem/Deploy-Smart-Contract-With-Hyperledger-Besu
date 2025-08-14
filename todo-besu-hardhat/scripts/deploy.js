async function main() {
  const TodoContract = await ethers.getContractFactory("Todo");
  const todo = await TodoContract.deploy();

  await todo.deployed();
  console.log(`ToDoList deployed to: ${todo.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
