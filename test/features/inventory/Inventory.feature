Feature: Sauce labs price checking feature

    @demo @smoke
    Scenario Outline: Check wether all products have a valid price
        Given user is logged in sauce labs
        Then user sees <NumberOfProducts> products listed
        Then user validates the products have valid price
        Examples:
            | TestID    | NumberOfProducts |
            | INV_TC001 | 6                |