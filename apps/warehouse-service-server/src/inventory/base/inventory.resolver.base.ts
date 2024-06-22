/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Inventory } from "./Inventory";
import { InventoryCountArgs } from "./InventoryCountArgs";
import { InventoryFindManyArgs } from "./InventoryFindManyArgs";
import { InventoryFindUniqueArgs } from "./InventoryFindUniqueArgs";
import { CreateInventoryArgs } from "./CreateInventoryArgs";
import { UpdateInventoryArgs } from "./UpdateInventoryArgs";
import { DeleteInventoryArgs } from "./DeleteInventoryArgs";
import { Product } from "../../product/base/Product";
import { Warehouse } from "../../warehouse/base/Warehouse";
import { InventoryService } from "../inventory.service";
@graphql.Resolver(() => Inventory)
export class InventoryResolverBase {
  constructor(protected readonly service: InventoryService) {}

  async _inventoriesMeta(
    @graphql.Args() args: InventoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Inventory])
  async inventories(
    @graphql.Args() args: InventoryFindManyArgs
  ): Promise<Inventory[]> {
    return this.service.inventories(args);
  }

  @graphql.Query(() => Inventory, { nullable: true })
  async inventory(
    @graphql.Args() args: InventoryFindUniqueArgs
  ): Promise<Inventory | null> {
    const result = await this.service.inventory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Inventory)
  async createInventory(
    @graphql.Args() args: CreateInventoryArgs
  ): Promise<Inventory> {
    return await this.service.createInventory({
      ...args,
      data: {
        ...args.data,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,

        warehouse: args.data.warehouse
          ? {
              connect: args.data.warehouse,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Inventory)
  async updateInventory(
    @graphql.Args() args: UpdateInventoryArgs
  ): Promise<Inventory | null> {
    try {
      return await this.service.updateInventory({
        ...args,
        data: {
          ...args.data,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,

          warehouse: args.data.warehouse
            ? {
                connect: args.data.warehouse,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Inventory)
  async deleteInventory(
    @graphql.Args() args: DeleteInventoryArgs
  ): Promise<Inventory | null> {
    try {
      return await this.service.deleteInventory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(
    @graphql.Parent() parent: Inventory
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Warehouse, {
    nullable: true,
    name: "warehouse",
  })
  async getWarehouse(
    @graphql.Parent() parent: Inventory
  ): Promise<Warehouse | null> {
    const result = await this.service.getWarehouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}