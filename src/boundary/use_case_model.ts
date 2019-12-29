class UseCaseModel {
    private static final Class<AskForPoem> asksForPoem = AskForPoem.class;

    public static Model build(Consumer<AskForPoem> displaysRandomPoem) {
        Model model = Model.builder()
            .user(asksForPoem).system(displaysRandomPoem)
        .build();

        return model;
    }
}